const Router = require("express").Router();
const prisma = require("../prisma");
const bcrypt = require("bcryptjs");
const createUser = require("../controllers/signUp");

Router.post("/", createUser);

module.exports = Router;
