const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const { signUp, signIn } = require("../controllers/authController");

const Router = express.Router();

Router.route("/signup").post(signUp);
Router.route("/signin").post(signIn);
Router.route("/").post(createUser).get(getUsers);
Router.route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = Router;
