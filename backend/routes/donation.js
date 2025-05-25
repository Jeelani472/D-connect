const express = require("express");
const Donation = require("../models/Donation");
const User = require("../models/User");
const auth = require("../middlewares/auth");
const {
  analyzeDonationUrgency,
  translateDonationText,
} = require("../utils/gemini");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { title, description, category, location, image, language } = req.body;
  try {
    let translatedDesc = description;
    if (language && language !== "en") {
      translatedDesc = await translateDonationText(description, "en");
    }
    const urgency = await analyzeDonationUrgency(translatedDesc);
    const donation = new Donation({
      title,
      description: translatedDesc,
      category,
      urgency,
      location,
      image,
      donor: req.user.id,
    });
    await donation.save();
    res.json(donation);
  } catch (err) {
    console.error("Error in donation post:", err); // <-- Add this line
    res.status(500).send("Server error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const donations = await Donation.find({ status: "pending" });
    res.json(donations);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

router.put("/:id/collect", auth, async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      { status: "collected", ngo: req.user.id },
      { new: true }
    );
    res.json(donation);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
// This code defines an Express.js router for donation management, including creating, retrieving, and updating donations with urgency analysis and translation functionalities.
