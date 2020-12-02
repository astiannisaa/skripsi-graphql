const Mongoose = require("mongoose");

const Task = new Mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  class: String,
  all: String,
});

module.exports = Mongoose.model("Task", Task);
