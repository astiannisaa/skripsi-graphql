const Mongoose = require("mongoose");

const Content = new Mongoose.Schema({
  _id: String,
  order: String,
  title: String,
  content: String,
  all: String,
});

module.exports = Mongoose.model("Content", Content);
