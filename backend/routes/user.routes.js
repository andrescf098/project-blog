const express = require("express");
const router = express.Router();
const service = require("../services/user.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
} = require("../schemas/user.schema");
const passport = require("passport");
const {
  checkAuthorizedRoles,
  checkIdForUser,
} = require("../middlewares/auth.handler");
const ROLES = require("../utils/auth/permissions.util");

router.get(
  "/",
  [
    passport.authenticate("jwt", { session: false }),
    checkAuthorizedRoles(...ROLES.admin),
  ],
  async (req, res, next) => {
    try {
      res.status(200).json(await service.find());
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:id",
  [validatorHandler(getUserSchema, "params")],
  async (req, res, next) => {
    try {
      const id = req.params.id;
      res.status(200).json(await service.findOne(id));
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  [validatorHandler(createUserSchema, "body")],
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getUserSchema, "params"),
    checkAuthorizedRoles(...ROLES.registeredUser),
    checkIdForUser(),
    validatorHandler(updateUserSchema, "body"),
  ],
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.get("/email/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    res.json(await service.findByEmail(email));
  } catch (error) {
    next(error);
  }
});
router.patch(
  "/admin/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getUserSchema, "params"),
    checkAuthorizedRoles(...ROLES.admin),
  ],
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  [
    passport.authenticate("jwt", { session: false }),
    validatorHandler(getUserSchema, "params"),
    checkAuthorizedRoles(...ROLES.admin),
  ],
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
