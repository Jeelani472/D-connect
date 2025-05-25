require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth');
const ngoRoutes = require('./routes/ngo');
const donationRoutes = require('./routes/donation');
const dbUrl = process.env.ATLASDB_URL;
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/ngo', ngoRoutes);
app.use('/api/donation', donationRoutes);

mongoose.connect(dbUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import and use your routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
