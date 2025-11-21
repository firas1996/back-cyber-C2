const User = require("../models/userModel");

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    res.status(201).json({
      message: "success",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      err: error.message,
    });
  }
};
exports.signIn = async (req, res) => {};
