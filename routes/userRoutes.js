const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
} = require("../controllers/userController");

const Router = express.Router();

Router.post("/createuser", createUser);
Router.get("/getAllUsers", getUsers);
Router.get("/getUserById/:id", getUserById);

module.exports = Router;
