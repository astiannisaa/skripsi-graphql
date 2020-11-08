const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Course = new Schema({
  _id: String,
  type: String,
  title: String,
  description: String,
  all: String,
});

module.exports = Mongoose.model("Course", Course);
