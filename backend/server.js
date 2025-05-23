require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/emailRoutes');


// Validate critical environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.FRONTEND_URL) {
  console.error('ERROR: Missing required environment variables');
  console.error('Ensure EMAIL_USER, EMAIL_PASS, and FRONTEND_URL are set in .env file');
  process.exit(1);
}

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/email', emailRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error('Unhandled error:');
  console.error('Error details:', {
    message: err.message,
    stack: err.stack,
  });
  res.status(500).json({ error: 'Something went wrong!', details: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Available at http://localhost:${PORT}`);
});