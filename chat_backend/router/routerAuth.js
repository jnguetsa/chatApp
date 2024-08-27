const express = require("express");
const controller = require("../controller/appControllerAuth.js");

const routerAuth = express.Router();

routerAuth.post("/login", controller.login);
routerAuth.post("/sign", controller.sign);
routerAuth.post("/logout", controller.logout);
routerAuth.get("/getAll", controller.getAll);

module.exports = routerAuth;
