const express = require('express');
const router = express.Router();
const transporter = require('../config/emailConfig');

router.post('/send', async (req, res) => {
  const { user_name, user_email, message } = req.body;



  // Validate request body
  if (!user_name || !user_email || !message) {
    console.error('Validation failed: Missing required fields');
    return res.status(400).json({ error: 'Missing required fields: user_name, user_email, message' });
  }

  try {
    // Re-verify transporter before sending
    console.log('Re-verifying transporter...');
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error('Transporter re-verification failed:', error);
          reject(error);
        } else {
          console.log('Transporter re-verified successfully');
          resolve(success);
        }
      });
    });

    // Send email to yourself
    console.log('Sending email to owner...');
    const ownerMailInfo = await transporter.sendMail({
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
    console.log('Owner email sent:', {
      messageId: ownerMailInfo.messageId,
      accepted: ownerMailInfo.accepted,
      rejected: ownerMailInfo.rejected,
    });

    // Send auto-reply to sender
    console.log('Sending auto-reply to:', user_email);
    const replyMailInfo = await transporter.sendMail({
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
    console.log('Auto-reply sent:', {
      messageId: replyMailInfo.messageId,
      accepted: replyMailInfo.accepted,
      rejected: replyMailInfo.rejected,
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending failed:');
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      stack: error.stack,
    });
    res.status(500).json({ error: 'Failed to send emails', details: error.message });
  }
});

module.exports = router;