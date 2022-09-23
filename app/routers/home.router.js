// var express = require("express");
// var router = express.Router();

// var homeController = require("../controllers/home.controller");
// router.get("/", homeController.home);

// router.get("/about", homeController.about);

module.exports = function (router) {
  var homeController = require("../controllers/home.controller");
  router.get("/", homeController.home);

  router.get("/about", homeController.about);
};
