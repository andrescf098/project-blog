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

router.post("/recovery", async (req, res, next) => {
  try {
    const { email } = req.body;
    res.json(await Model.sendRecovery(email));
  } catch (error) {
    next(error);
  }
});

router.post("/change-password", async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    res.json(await Model.changePassword(token, newPassword));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
