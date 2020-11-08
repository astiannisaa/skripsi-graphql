const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const KeyFeature = new Schema({
  _id: String,
  order: String,
  title: String,
  course: String,
  all: String,
});

module.exports = Mongoose.model("KeyFeature", KeyFeature);
