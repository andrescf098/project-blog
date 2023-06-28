const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const id = Joi.objectId();
const title = Joi.string().min(1);
const content = Joi.string().min(10);
const image = Joi.string();

const getArticleSchema = Joi.object({
  id: id.required(),
});

const createArticleSchema = Joi.object({
  title: title.required(),
  content: content.required(),
  image: image,
});

const updateArticleSchema = Joi.object({
  title,
  content,
  image,
});

module.exports = { getArticleSchema, createArticleSchema, updateArticleSchema };
