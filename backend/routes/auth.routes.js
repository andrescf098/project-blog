const express = require("express");
const router = express.Router();
const Model = require("../services/auth.service");
const passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(await Model.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
