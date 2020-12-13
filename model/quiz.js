const Mongoose = require("mongoose");

const Quiz = new Mongoose.Schema({
  _id: String,
  title: String,
  course: String,
  all: String,
});

module.exports = Mongoose.model("Quiz", Quiz);
