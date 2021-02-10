const Mongoose = require("mongoose");

const Instructor = new Mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  password: String,
  all: String,
});

module.exports = Mongoose.model("Instructor", Instructor);
