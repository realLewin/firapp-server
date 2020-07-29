var express = require("express");
var sequelize = require("./util/database");
var postRouter = require("./routes/post");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/post", postRouter);

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(7777, () => {
  console.log("server start listen!");
});

// Test for sequelize connection;
// const test = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Successful");
//   } catch (err) {
//     console.log(err);
//   } finally {
//     sequelize.close();
//   }
// };
// test();
