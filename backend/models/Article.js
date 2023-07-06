const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "default.png",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Article", ArticleSchema);
