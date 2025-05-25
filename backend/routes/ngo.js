const express = require('express');
const NGO = require('../models/NGO');
const User = require('../models/User');
const auth = require('../middlewares/auth');
const { translateDonationText } = require('../utils/gemini');
const router = express.Router();

router.post('/register', auth, async (req, res) => {
  const { orgId, name, area, docs } = req.body;
  try {
    const exists = await NGO.findOne({ orgId });
    if (exists) return res.status(400).json({ error: "NGO already registered" });
    // In a real app, you would validate docs with Gemini here
    const ngo = new NGO({ orgId, name, area, docs, user: req.user.id });
    await ngo.save();
    res.json(ngo);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
// This code defines an Express.js router for NGO registration, including authentication middleware and basic error handling.