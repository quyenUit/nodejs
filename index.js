var express = require("express");
var app = express();
//cau hinh body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cac router
require("./app/routers/home.router")(app);
require("./app/routers/book.router")(app);

// app.use("/", homeRouter);
// app.use("/", bookRouter);

app.listen(3000, function () {
  console.log("Server listening on http://localhost:3000");
});
