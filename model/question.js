const Mongoose = require("mongoose");

const Question = new Mongoose.Schema({
  _id: String,
  order: String,
  question: String,
  answer: String,
  a: String,
  b: String,
  c: String,
  d: String,
  quiz: String,
  all: String,
});

module.exports = Mongoose.model("Question", Question);
