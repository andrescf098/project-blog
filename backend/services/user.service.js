const Model = require("../models/User");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

async function find() {
  const users = await Model.find().sort({ createAt: -1 });
  return users;
}

async function findOne(id) {
  const user = await Model.findById(id);
  if (!user) {
    throw boom.notFound("User not found");
  }
  return user;
}

async function findByEmail(email) {
  const user = await Model.find({ $or: [{ email: email }] });
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
