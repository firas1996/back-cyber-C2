const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const Router = express.Router();

Router.post("/createuser", createUser);
Router.get("/getAllUsers", getUsers);
Router.get("/getUserById/:id", getUserById);
Router.patch("/updateUserById/:id", updateUserById);
Router.delete("/deleteUserById/:id", deleteUserById);

module.exports = Router;
