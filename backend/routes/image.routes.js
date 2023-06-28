const express = require("express");
const router = express.Router();
const upload = require("../utils/storage");
const controller = require("../services/image.service");
const response = require("../utils/response");

router.get("/:file", (req, res) => {
  controller
    .findImage(req.params.file, res)
    .then((image) => {
      res.sendFile(image);
    })
    .catch((err) => {
      response.error(req, res, err, 500);
    });
});

router.post("/:id", [upload.single("file0")], (req, res) => {
  controller
    .upload(req.params.id, req.file)
    .then((article) => {
      response.success(req, res, article, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 404);
    });
});

module.exports = router;
