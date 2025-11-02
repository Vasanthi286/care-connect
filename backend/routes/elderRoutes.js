// routes/elderroutes.js
const express = require("express");
const router = express.Router();
const Elder = require("../models/Elder");

// Register Elder
router.post("/submit-elder", async (req, res) => {
  try {
    const existingElder = await Elder.findOne({ email: req.body.email });
    if (existingElder) {
      return res.redirect("/elder-register?exists=true");
    }

    const newElder = new Elder(req.body);
    await newElder.save();
    res.redirect("/elder-register?submitted=true");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving elder");
  }
});

// Elder Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const elder = await Elder.findOne({ email });
    if (!elder || elder.password !== password) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // ✅ Send full elder object
    res.status(200).json({
      msg: "Login successful",
      elder: {
        _id: elder._id,
        name: elder.name,
        email: elder.email,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: "Login failed" });
  }
});

module.exports = router;
