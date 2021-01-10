const Mongoose = require("mongoose");

const Bab = new Mongoose.Schema({
  _id: String,
  name: String,
  order: String,
  course: String,
  all: String,
});

module.exports = Mongoose.model("Bab", Bab);
