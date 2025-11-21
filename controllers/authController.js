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
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "email and password are required !!!",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "Email or password incorrect !!!",
      });
    }
    if (!(await user.comparePass(password, user.password))) {
      res.status(400).json({
        message: "Email or password incorrect !!!",
      });
    }
    res.status(201).json({
      message: "Logged In !!",
    });
  } catch (error) {
    res.status(400).json({
      message: "fail",
      err: error.message,
    });
  }
};
