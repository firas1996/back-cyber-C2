const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
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

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "success",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      err: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      message: "aaaaaa",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      err: error.message,
    });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "aaaaaa",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      err: error.message,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      message: "aaaaaa",
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      err: error.message,
    });
  }
};
