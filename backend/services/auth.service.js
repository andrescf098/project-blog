const userService = require("./user.service");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

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

module.exports = { getUser, signToken };
