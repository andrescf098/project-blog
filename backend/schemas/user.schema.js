const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const id = Joi.objectId();
const name = Joi.string().min(1).max(13);
const lastname = Joi.string().min(1).max(13);
const email = Joi.string().email();
const password = Joi.string().min(8).max(30);
const role = Joi.string();

const getUserSchema = Joi.object({
  id: id.required(),
});

const createUserSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  email: email.required(),
  password: password.required(),
  role: role,
});

const updateUserSchema = Joi.object({
  name,
  lastname,
  email,
  password,
  role: role.invalid("admin"),
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };
