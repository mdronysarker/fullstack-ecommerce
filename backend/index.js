require("dotenv").config();

const express = require("express");
const router = require("./routes");
const app = express();
const mongoConfig = require("./config/mongoConfig");

mongoConfig();

app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("port is runing");
});
