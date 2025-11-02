// routes/requestRoutes.js
const express = require("express");
const router = express.Router();
const HelpRequest = require("../models/HelpRequest");

// Submit new help request
router.post("/submit-request", async (req, res) => {
  try {
    const elderId = req.body.elderId;
    if (!elderId) {
      return res.status(400).send("Elder ID is required");
    }

    const newRequest = new HelpRequest({
      name: req.body.name,
      age: req.body.age,
      location: req.body.location,
      helpType: req.body.helpType,
      contact: req.body.contact,
      elderId: elderId,
    });

    await newRequest.save();
    res.redirect("/request?submitted=true");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving request");
  }
});

// Get all help requests
router.get("/", async (req, res) => {
  try {
    const requests = await HelpRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).send("Error fetching requests");
  }
});

// Get available requests
router.get("/available", async (req, res) => {
  try {
    const requests = await HelpRequest.find({ status: "Pending" });
    res.json(requests);
  } catch (err) {
    res.status(500).send("Error fetching available requests");
  }
});

// Accept request
router.post("/accept", async (req, res) => {
  try {
    const { requestId, volunteerId } = req.body;

    const request = await HelpRequest.findById(requestId);
    if (!request) return res.status(404).json({ msg: "Request not found" });

    request.status = "Accepted";
    request.volunteerId = volunteerId;
    await request.save();

    res.json({ msg: "Request accepted successfully" });
  } catch (err) {
    res.status(500).send("Error accepting request");
  }
});

// View requests assigned to a volunteer
router.get("/my/:volunteerId", async (req, res) => {
  try {
    const requests = await HelpRequest.find({ volunteerId: req.params.volunteerId });
    res.json(requests);
  } catch (err) {
    res.status(500).send("Error fetching volunteer's requests");
  }
});

// Update request status
router.post("/update-status", async (req, res) => {
  try {
    const { requestId, status } = req.body;
    const updated = await HelpRequest.findByIdAndUpdate(
      requestId,
      { status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).send("Error updating status");
  }
});

// Get requests submitted by a specific elder
router.get("/elder/:elderId", async (req, res) => {
  try {
    const requests = await HelpRequest.find({ elderId: req.params.elderId }).sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).send("Error fetching elder's requests");
  }
});

module.exports = router;
