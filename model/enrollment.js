const Mongoose = require("mongoose");

const Enrollment = new Mongoose.Schema({
  _id: String,
  user: String,
  course: String,
  class: String,
  status: String,
  all: String,
});

module.exports = Mongoose.model("Enrollment", Enrollment);
