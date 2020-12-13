const Mongoose = require("mongoose");

const User = new Mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  phonenumber: String,
  password: String,
  all: String,
});

module.exports = Mongoose.model("User", User);
