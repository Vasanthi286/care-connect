const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

// Register volunteer
router.post("/submit-volunteer", async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.redirect("/volunteer?submitted=true");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving volunteer");
  }
});

// Login volunteer
// routes/volunteerroutes.js
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const volunteer = await Volunteer.findOne({ email });
    if (!volunteer) return res.status(401).json({ msg: "Email not found" });
    if (volunteer.password !== password)
      return res.status(401).json({ msg: "Incorrect password" });

    res.status(200).json({ msg: "Login successful", volunteerId: volunteer._id });
  } catch (err) {
    res.status(500).json({ msg: "Login failed" });
  }
});


module.exports = router;
