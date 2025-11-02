// models/Elder.js
const mongoose = require("mongoose");

const elderSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
  contact: String,
  email: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model("Elder", elderSchema);
