const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "user.png",
  },
  recoveryToken: {
    type: String,
  },
  role: {
    type: String,
    default: "default",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("User", UserSchema);
