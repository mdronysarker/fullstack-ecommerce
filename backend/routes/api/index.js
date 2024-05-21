const express = require("express");
const auth = require("./registration");
const route = express.Router();

route.use("/auth", auth);

module.exports = route;
