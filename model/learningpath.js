const Mongoose = require("mongoose");

const LearningPath = new Mongoose.Schema({
  _id: String,
  order: String,
  title: String,
  description: String,
  course: String,
  all: String,
});

module.exports = Mongoose.model("LearningPath", LearningPath);
