// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');


const app = express();
const authRoutes=require('./routes/authRoutes');
const perspectiveRoutes=require('./routes/perspectiveRoutes');
const bidRoutes=require('./routes/bidRoutes');
// --- Middleware ---
app.use(cors());
app.use(express.json());


//using routes
app.use('/auth', authRoutes);
app.use('/perspectives', perspectiveRoutes);
app.use('/bids',bidRoutes);

// --- Root Endpoint ---
app.get('/', (req, res) => {
  res.json({ message: 'Perspective Hub API is running.' });
});

// --- Start Server After DB Connection ---
const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.sync({ alter: true });
 // Test DB connection
    console.log('✅ Connected to MySQL database.');
    
    app.listen(PORT, () => {
      console.log(`🚀 Perspective Hub server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to connect to MySQL:', error);
    process.exit(1);
  }
}

start();
