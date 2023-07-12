const modelArticle = require("../models/Article");
const modelUser = require("../models/User");
const fs = require("fs");
const path = require("path");

async function uploadImage(id, image) {
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
    const article = await modelArticle.findByIdAndUpdate(id, params, {
      new: true,
    });
    return article;
  }
}
async function uploadImageUser(id, image) {
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
    const article = await modelUser.findByIdAndUpdate(id, params, {
      new: true,
    });
    return article;
  }
}

function findImage(filename) {
  return new Promise((resolve, reject) => {
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
  uploadUser: uploadImageUser,
  upload: uploadImage,
  findImage: findImage,
};
