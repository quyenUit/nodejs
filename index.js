var express = require("express");
var app = express();
//cau hinh body-parser
var bodyParser = require("body-parser");
const bookRouter = require("./app/routers/book.router");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cac router
require("./app/routers/home.router")(app);
require("./app/routers/book.router")(app);

// app.use("/", homeRouter);
// app.use("/", bookRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server listening run localhost://${PORT}`);
});
