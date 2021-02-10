const Mongoose = require("mongoose");

const Enrollment = new Mongoose.Schema({
  _id: String,
  user: String,
  course: String,
  class: String,
  materi: String,
  task: [
    {
      _id: String,
    },
  ],
  quiz: [
    {
      _id: String,
      score: String,
    },
  ],
  status: String,
  all: String,
});

module.exports = Mongoose.model("Enrollment", Enrollment);
