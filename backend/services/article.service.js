const Model = require("../models/Article");
const boom = require("@hapi/boom");

async function create(data) {
  const newArticle = Model(data);
  await newArticle.save();
  return newArticle;
}

async function find(limit) {
  const articles = await Model.find().sort({ date: -1 });
  if (limit) {
    articles.limit(limit);
  }
  return articles;
}

async function findOne(param) {
  let response = await Model.find({
    $or: [
      { title: { $regex: param, $options: "i" } },
      { content: { $regex: param, $options: "i" } },
    ],
  }).sort({ date: -1 });
  if (!response) {
    throw boom.notFound("Article not found");
  }
  if (limit) {
    response.limit(limit);
  }
  return response;
}
async function findOne(param) {
  let response = await Model.find({
    $or: [
      { title: { $regex: param, $options: "i" } },
      { content: { $regex: param, $options: "i" } },
    ],
  })
    .sort({ date: -1 })
    .populate("user");
  if (!response) {
    throw boom.notFound("Article not found");
  }
  return response;
}

async function findById(id) {
  const article = await Model.findById(id).populate("user");
  if (!article) {
    throw boom.notFound("Article not found");
  }
  return article;
}

async function update(id, data) {
  const article = await Model.findByIdAndUpdate(id, data, { new: true });
  if (!article) {
    throw boom.notFound("Article not found");
  }
  return article;
}

async function deleteArticle(id) {
  await Model.findByIdAndDelete(id);
  return { response: true };
}

module.exports = {
  create,
  find,
  findOne,
  findById,
  update,
  delete: deleteArticle,
};
