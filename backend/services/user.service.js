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
  let response = {};
  const user = await Model.findById(id);
  const articles = await ModelArticle.find({ user: user.id });
  const userData = {
    _id: user._id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    image: user.image,
    role: user.role,
  };
  if (!user) {
    throw boom.notFound("User not found");
  }
  if (!articles) {
    return userData;
  } else {
    return (response = {
      ...userData,
      articles: articles,
    });
  }
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
  if (data.password) {
    const hash = await bcrypt.hash(data.password, 10);
    const dataUpdate = {
      ...data,
      password: hash,
    };
    const user = await Model.findByIdAndUpdate(id, dataUpdate, { new: true });
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  } else {
    const user = await Model.findByIdAndUpdate(id, data, { new: true });
    if (!user) {
      throw boom.notFound("User not found");
    }
    return user;
  }
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
