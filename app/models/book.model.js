const db = require("../common/connect");
const Book = function () {
  this.id = book.id;
  this.name = book.name;
  this.image = book.image;
  this.author_id = book.author_id;
};

//pho bien
Book.get_all = function (result) {
  db.query("SELECT * FROM book", function (err, book) {
    if (err) {
      result(null);
    } else {
      result(book);
    }
  });
  // phan 5:
  //   var data = [
  //     { id: 1, name: "Book name 1" },
  //     { id: 1, name: "Book name 1" },
  //     { id: 1, name: "Book name 1" },
  //     { id: 1, name: "Book name 1" },
  //     { id: 1, name: "Book name 1" },
  //   ];
  // result(data);
};

Book.getById = function (id, result) {
  db.query("SELECT * FROM book WHERE id = ?", id, function (err, book) {
    if (err || book.length == 0) {
      result(null);
    } else {
      result(book[0]);
    }
  });
  // phan 5:
  //   var data = { id: id, name: "Book name 1" };
  //   return data;
};

Book.create = function (data, result) {
  //result(data);
  db.query("INSERT INTO book SET ?", data, function (err, book) {
    if (err) {
      result(null);
    } else {
      result({ id: book.insertId, ...data });
    }
  });
};

Book.remove = function (id, result) {
  // result("xoa bo co id " + id + " thanh cong");

  db.query("DELETE FROM book WHERE id = ?", id, function (err, book) {
    if (err) {
      result(null);
    } else {
      result("Xoa du lieu book co id " + id + " thah cong");
    }
  });
};

Book.update = function (b, result) {
  //result(data);
  console.log(b);
  db.query(
    "UPDATE book SET name=?, image=?,author_id=? WHERE id=?",
    [b.name, b.image, b.author_id, b.id],
    function (err, book) {
      if (err) {
        result(null);
        console.log("khong thnah cong");
      } else {
        result(b);
      }
    }
  );
};
module.exports = Book;
