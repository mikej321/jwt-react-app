const Router = require("express").Router();
const findUsers = require("../controllers/findUsers");

Router.get("/", findUsers);

module.exports = Router;
