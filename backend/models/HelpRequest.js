const mongoose = require("mongoose");

const helpRequestSchema = new mongoose.Schema({
  elderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Elder",
    required: true,
  },
  name: String,
  age: Number,
  location: String,
  helpType: {
    type: String,
    enum: ["Groceries", "Medicine", "Doctor Visit", "Other"], // Added Doctor Visit
    required: true,
  },
  contact: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "In Progress", "Completed"],
    default: "Pending",
  },
  volunteerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Volunteer",
    default: null,
  },
});

module.exports = mongoose.model("HelpRequest", helpRequestSchema);
