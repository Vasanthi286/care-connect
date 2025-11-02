const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: String,
  location: String,
  helpType: String,
  contact: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
