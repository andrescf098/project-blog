const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const user = Joi.objectId();
const id = Joi.objectId();
const title = Joi.string().min(1);
const content = Joi.string().min(10);
const description = Joi.string().min(5);
const image = Joi.string();

const getArticleSchema = Joi.object({
  id: id.required(),
});

const createArticleSchema = Joi.object({
  user: user.required(),
  title: title.required(),
  content: content.required(),
  description: description.required(),
  image: image,
});

const updateArticleSchema = Joi.object({
  title,
  content,
  description,
  image,
});

module.exports = { getArticleSchema, createArticleSchema, updateArticleSchema };
