const express = require("express");
const router = express.Router();
const service = require("../services/article.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  getArticleSchema,
  createArticleSchema,
  updateArticleSchema,
} = require("../schemas/article.schema");

router.get("/:limit?", async (req, res, next) => {
  try {
    res.status(200).json(await service.find(req.params.limit));
  } catch (error) {
    next(error);
  }
});

router.get(
  "/article/:id",
  [validatorHandler(getArticleSchema, "params")],
  async (req, res, next) => {
    try {
      res.status(200).json(await service.findById(req.params.id));
    } catch (error) {
      next(error);
    }
  }
);

router.get("/find/:find", async (req, res, next) => {
  try {
    res.status(200).json(await service.findOne(req.params.find));
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  [validatorHandler(createArticleSchema, "body")],
  async (req, res, next) => {
    try {
      res.status(201).json(await service.create(req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/article/:id",
  [
    validatorHandler(getArticleSchema, "params"),
    validatorHandler(updateArticleSchema, "body"),
  ],
  async (req, res, next) => {
    try {
      res.status(200).json(await service.update(req.params.id, req.body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/article/:id",
  [validatorHandler(getArticleSchema, "params")],
  async (req, res, next) => {
    try {
      res.status(200).json(await service.delete(req.params.id));
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
