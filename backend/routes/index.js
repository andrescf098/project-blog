const express = require("express");
const article = require("./article.routes");
const image = require("./image.routes");
const user = require("./user.routes");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/articles", article);
  router.use("/image", image);
  router.use("/user", user);
}

module.exports = routerApi;
