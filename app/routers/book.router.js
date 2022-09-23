// var express = require("express");
// var router = express.Router();

// var bookController = require("../controllers/book.controller");
// router.get("/book/list", bookController.get_list);

// router.get("/book/detail/:id", bookController.detail);

module.exports = function (router) {
  var bookController = require("../controllers/book.controller");
  router.get("/book/list", bookController.get_list);

  router.get("/book/detail/:id", bookController.detail);

  router.post("/book/add", bookController.add_book);

  router.delete("/book/delete/:id", bookController.remove_book);

  router.put("/book/update", bookController.update_book);
};
