const Model = require("../models/User");
const ModelArticle = require("../models/Article");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

async function find() {
  const users = await Model.find().sort({ createAt: -1 });
  const usersData = [];
  for (let i = 0; i < users.length; i++) {
    const user = {
      _id: users[i]._id,
      name: users[i].name,
      lastname: users[i].lastname,
      email: users[i].email,
      role: users[i].role,
    };
    usersData.push(user);
  }
  return usersData;
}

async function findOne(id) {
  const user = await Model.findById(id);
  const articles = await ModelArticle.find({ user: user._id });
  const userData = {
    _id: user[0]._id,
    name: user[0].name,
    lastname: user[0].lastname,
    email: user[0].email,
    role: user[0].role,
  };
  if (!user || !articles) {
    throw boom.notFound("User not found");
  }
  const response = {
    ...userData,
    articles: articles,
  };
  return response;
}

async function findByEmail(email) {
  let user = await Model.findOne({ email: email }).select("+password");
  if (!user) {
    throw boom.notFound("User not found");
  }
  return user;
}

async function create(data) {
  const hash = await bcrypt.hash(data.password, 10);
  const newUser = await Model({
    ...data,
    password: hash,
  });
  await newUser.save();
  return newUser;
}

async function update(id, data) {
  const user = await Model.findByIdAndUpdate(id, data, { new: true });
  if (!user) {
    throw boom.notFound("User not found");
  }
  return user;
}

async function deleteUser(id) {
  await Model.findByIdAndDelete(id);
  return { response: true };
}

module.exports = {
  find,
  findOne,
  findByEmail,
  create,
  update,
  delete: deleteUser,
};
