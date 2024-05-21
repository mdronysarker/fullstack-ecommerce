require("dotenv").config();
const express = require("express");
const apiRoute = require("./api");
const route = express.Router();

const api = process.env.API_URL;

route.use(api, apiRoute);

module.exports = route;
