const Mongoose = require("mongoose");

const Class = new Mongoose.Schema({
  _id: String,
  name: String,
  course: String,
  all: String,
});

module.exports = Mongoose.model("Class", Class);
