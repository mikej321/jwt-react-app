const express = require("express");
const validateToken = require("./controllers/verify");

const getUsers = require("./routes/getUsers");
const createUsers = require("./routes/createUsers");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.all("*", [validateToken]);
app.get("/:id", getUsers);
app.post("/create-user", createUsers);
