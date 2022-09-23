var Book = require("../models/book.model");

exports.get_list = function (req, res) {
  // var data = [
  //   { id: 1, name: "book mane 1" },
  //   { id: 1, name: "book mane 1" },
  //   { id: 1, name: "book mane 1" },
  //   { id: 1, name: "book mane 1" },
  //   { id: 1, name: "book mane 1" },
  // ];

  Book.get_all(function (data) {
    res.send({ result: data });
  });
};

exports.detail = function (req, res) {
  // var data = Book.getById(req.params.id);
  Book.getById(req.params.id, function (respnse) {
    res.send({ result: respnse });
  });
};

// install body-parser
exports.add_book = function (req, res) {
  var data = req.body;
  Book.create(data, function (respnse) {
    res.send({ result: respnse });
  });
};

exports.remove_book = function (req, res) {
  var id = req.params.id;
  Book.remove(id, function (respnse) {
    res.send({ result: respnse });
  });
};

exports.update_book = function (req, res) {
  var data = req.body;
  Book.update(data, function (respnse) {
    res.send({ result: respnse });
  });
};
