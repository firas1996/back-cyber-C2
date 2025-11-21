const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    validate: function (cPass) {
      return cPass === this.password;
    },
    message: "Passwords are not the same",
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  lastPasswordUpdateDate: {
    type: Date,
    default: Date.now(),
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 20);
    this.confirmPassword = undefined;
  }
  return next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
