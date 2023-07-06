require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  jwtSecret: process.env.JWT_SECRET,
  smtpAccount: process.env.SMTP_ACCOUNT,
  smtpPassword: process.env.SMTP_PASS,
};

module.exports = { config };
