const Model = require("../models/Article");
const fs = require("fs");
const path = require("path");

function uploadImage(id, image) {
  return new Promise((resolve, reject) => {
    if (!id && !image) {
      reject("Invalid query");
    }
    let file = image.filename;
    let file_split = file.split(".");
    let extension = file_split[1];
    if (
      extension != "png" &&
      extension != "jpg" &&
      extension != "jpeg" &&
      extension != "gif"
    ) {
      fs.unlink(image.path, (err) => {
        reject("Invalid image");
      });
    } else {
      let params = {
        image: image.filename,
      };
      const article = Model.findByIdAndUpdate(id, params, { new: true });
      resolve(article);
    }
  });
}

function findImage(filename) {
  return new Promise((resolve, reject) => {
    console.log(filename);
    let pathFile = "./assets/images/articles/" + filename;
    fs.stat(pathFile, (err, exist) => {
      if (exist) {
        resolve(path.resolve(pathFile));
      } else {
        reject("Image not found");
      }
    });
  });
}

module.exports = {
  upload: uploadImage,
  findImage: findImage,
};
