const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const LearningPath = new Schema({
  _id: String,
  order: String,
  title: String,
  description: String,
  course: String,
});

module.exports = Mongoose.model("LearningPath", LearningPath);
