const express = require('express');
const router = express.Router();
const transporter = require('../config/emailConfig');

router.post('/send', async (req, res) => {
  const { user_name, user_email, message } = req.body;

  try {
    // Send email to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message from ${user_name}`,
      html: `
        <h3>New Message Received</h3>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send auto-reply to sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user_email,
      subject: 'Thank You for Your Message',
      html: `
        <h3>Message Received</h3>
        <p>Dear ${user_name},</p>
        <p>Thank you for contacting me. I have received your message and will respond within 3 working days.</p>
        <p>Best regards,<br>Shubha Roy</p>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;