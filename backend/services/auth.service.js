const userService = require("./user.service");
const userModel = require("../models/User");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { config } = require("../config");
const nodemailer = require("nodemailer");

async function getUser(email, password) {
  const user = await userService.findByEmail(email);
  if (!user) {
    throw boom.unauthorized();
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw boom.unauthorized();
  }
  return user;
}
async function signToken(user) {
  const payload = {
    sub: user.id,
    role: user.role,
  };
  const userData = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
  };
  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: 360000 });

  return { userData, token };
}
async function sendRecovery(email) {
  const user = await userService.findByEmail(email);
  if (!user) {
    throw boom.unauthorized();
  }
  const payload = { sub: user.id };
  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "15m" });
  const link = `http://localhost:5173/change-password?token=${token}`;
  await userService.update(user.id, { recoveryToken: token });
  const mail = {
    from: config.smtpAccount,
    to: `${user.email}`,
    subject: "Email para la recuperción de la contraseña",
    html: `<p>
              <b>Ingresa al siguente link para recuperar la contraseña</b>
            </p>
            <p>
              <b>${link}</b>
            </p>`,
  };
  const response = await this.sendEmail(mail);
  return response;
}

async function sendEmail(infoMail) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: config.smtpAccount,
      pass: config.smtpPassword,
    },
  });
  await transporter.sendMail(infoMail);
  return { message: "mail sent" };
}

async function changePassword(token, newPassword) {
  try {
    const payload = jwt.verify(token, config.jwtSecret);
    const user = await userModel.findById(payload.sub);
    if (user.recoveryToken !== token) {
      throw boom.unauthorized();
    }
    await userService.update(user.id, {
      recoveryToken: null,
      password: newPassword,
    });
    return { message: "password changed" };
  } catch (error) {
    throw boom.unauthorized();
  }
}

module.exports = {
  getUser,
  signToken,
  changePassword,
  sendEmail,
  sendRecovery,
};
