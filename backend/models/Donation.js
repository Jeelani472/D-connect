const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['food', 'clothes', 'toys', 'other'], required: true },
  urgency: { type: String, enum: ['high', 'medium', 'low'], default: 'low' },
  location: { type: String, required: true },
  image: { type: String },
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO' },
  status: { type: String, enum: ['pending', 'collected'], default: 'pending' }
});

module.exports = mongoose.model('Donation', donationSchema);
// This code defines a Mongoose schema for a Donation model in a Node.js application.