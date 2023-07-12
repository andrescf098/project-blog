const express = require("express");
const router = express.Router();
const upload = require("../utils/storage");
const service = require("../services/image.service");

router.get("/:file", async (req, res, next) => {
  try {
    res.sendFile(await service.findImage(req.params.file));
  } catch (error) {
    next(error);
  }
});

router.post("/:id", [upload.single("file0")], async (req, res, next) => {
  try {
    res.json(await service.upload(req.params.id, req.file));
  } catch (error) {
    next(error);
  }
});
router.post("/user/:id", [upload.single("file0")], async (req, res, next) => {
  try {
    res.json(await service.uploadUser(req.params.id, req.file));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
