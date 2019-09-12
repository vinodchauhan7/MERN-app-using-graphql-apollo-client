const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String
});

module.exports = mongoose.model("owners", ownerSchema);
