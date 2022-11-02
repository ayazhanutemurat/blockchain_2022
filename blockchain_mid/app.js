"use strict";
const path = require("path");
require("dotenv-safe").config({
  path: path.join(path.resolve(), ".env"),
  sample: path.join(path.resolve(), ".env.example"),
});

const express = require("express"),
  logger = require("morgan"),
  port = process.env.PORT;

const app = express();
app.engine("ejs", require("ejs-mate"));
app.set("views", "views/");
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/order", require("./routes/order.js"));

app.listen(port, function () {
  console.log("application is listening at port: " + port);
});
