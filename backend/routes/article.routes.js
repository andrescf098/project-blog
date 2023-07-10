const express = require("express");
const router = express.Router();
const service = require("../services/article.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  getArticleSchema,
  createArticleSchema,
  updateArticleSchema,
} = require("../schemas/article.schema");
const passport = require("passport");
const {
  checkAuthorizedRoles,
  checkIdForArticle,
} = require("../middlewares/auth.handler");
const ROLES = require("../utils/auth/permissions.util");

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
    res
      .status(200)
      .json(await service.findOne(req.params.find, req.params.limit));
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(createArticleSchema, "body"),
    checkAuthorizedRoles(...ROLES.registeredUser),
  ],
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
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getArticleSchema, "params"),
    validatorHandler(updateArticleSchema, "body"),
    checkAuthorizedRoles(...ROLES.registeredUser),
    checkIdForArticle(),
  ],
  async (req, res, next) => {
    try {
      res.status(200).json(await service.update(req.params.id, req.body));
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  "/admin/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getArticleSchema, "params"),
    validatorHandler(updateArticleSchema, "body"),
    checkAuthorizedRoles(...ROLES.admin),
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
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getArticleSchema, "params"),
    checkAuthorizedRoles(...ROLES.registeredUser),
    checkIdForArticle(),
  ],
  async (req, res, next) => {
    try {
      res.status(200).json(await service.delete(req.params.id));
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/admin/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getArticleSchema, "params"),
    checkAuthorizedRoles(...ROLES.admin),
  ],
  async (req, res, next) => {
    try {
      res.status(200).json(await service.delete(req.params.id));
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
