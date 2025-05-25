const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  orgId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  area: { type: String, required: true },
  docs: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('NGO', ngoSchema);
// This code defines a Mongoose schema for an NGO model in a Node.js application.