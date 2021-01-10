const Mongoose = require("mongoose");

const Materi = new Mongoose.Schema({
  _id: String,
  name: String,
  content: String,
  order: String,
  bab: String,
  all: String,
});

module.exports = Mongoose.model("Materi", Materi);
