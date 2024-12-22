const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail SMTP server
    port: 587,             // Port for STARTTLS
    secure: false,         // Use TLS (not SSL)
    auth: {
        user: 'your-email@gmail.com', // Your Gmail address
        pass: 'your-app-password',   // Your generated App Password
    },
});

// Mail options
const mailOptions = {
    from: 'your-email@gmail.com', // Sender's email address
    to: 'recipient@example.com',   // Recipient's email address
    subject: 'Hello from Nodemailer!',
    text: 'This is a test email sent using Nodemailer and Node.js.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error occurred:', error.message);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
