// models/Exercise.js
const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  des: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
