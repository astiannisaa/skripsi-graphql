const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Course = new Schema({
  _id: String,
  type: String,
  title: String,
  start: String,
  duration: String,
  description: String,
});

module.exports = Mongoose.model("Course", Course);
