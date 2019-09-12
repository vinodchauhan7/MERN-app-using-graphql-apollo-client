const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  name: String,
  model: Number,
  company: String,
  ownerId: String
});

module.exports = mongoose.model("cars", CarSchema);
