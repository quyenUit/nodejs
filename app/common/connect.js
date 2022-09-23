var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_api",
});

connection.connect(function (err) {
  if (err) console.log("ket noi CSDL khong thanh cong");
});

module.exports = connection;
