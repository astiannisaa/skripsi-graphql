const Mongoose = require("mongoose");

const Quiz = new Mongoose.Schema({
  _id: String,
  order: String,
  title: String,
  course: String,
  all: String,
});

module.exports = Mongoose.model("Quiz", Quiz);
