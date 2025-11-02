const mongoose = require("mongoose");

const acceptedRequestSchema = new mongoose.Schema({
  requestId: { type: mongoose.Schema.Types.ObjectId, ref: "HelpRequest", required: true },
  volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: "Volunteer", required: true },
  status: {
    type: String,
    enum: ["Accepted", "In Progress", "Completed"],
    default: "Accepted"
  },
  acceptedAt: {
    type: Date,
    default: Date.now
  }
});

acceptedRequestSchema.index({ requestId: 1, volunteerId: 1 }, { unique: true });


module.exports = mongoose.model("AcceptedRequest", acceptedRequestSchema);

