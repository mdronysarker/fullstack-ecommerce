const express = require("express");
const route = express.Router();
const registrationController = require("../../controllers/registrationController");
const secureApi = require("../../middlleware/secureApi");

route.post("/registration", secureApi, registrationController);

module.exports = route;
