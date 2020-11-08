const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const Content = new Schema({
  _id: String,
  order: String,
  title: String,
  content: String,
  all: String,
});

module.exports = Mongoose.model("Content", Content);
