const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' as the service
    auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS  // Your email password
    }
});

module.exports = transporter;
