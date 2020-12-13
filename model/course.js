const Mongoose = require("mongoose");

const Course = new Mongoose.Schema({
  _id: String,
  type: String,
  title: String,
  description: String,
  all: String,
});

module.exports = Mongoose.model("Course", Course);
