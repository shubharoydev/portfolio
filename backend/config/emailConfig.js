require('dotenv').config();
const nodemailer = require('nodemailer');


// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('ERROR: Missing required environment variables');
  console.error('Ensure EMAIL_USER and EMAIL_PASS are set in .env file');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true, // Enable connection pooling for better performance
  maxConnections: 5,
  connectionTimeout: 30000, // 30 seconds timeout
  logger: true, // Enable Nodemailer debug logging
  debug: true, // Include detailed debug info
});



module.exports = transporter;