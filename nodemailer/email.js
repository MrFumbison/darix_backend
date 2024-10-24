const transporter = require('./email.config.js'); // Import the transporter
const { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } = require('./templates.js');

const sendVerificationEmail = async (email, verificationToken) => {
    const mailOptions = {
        from: '"AuthApp" <authtimoth@gmail.com>', // Sender address
        to: email, // Receiver's email
        subject: "Verify your email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log("Error sending email", error);
    }
}

const sendWelcomeEmail = async (email, name) => {
    const mailOptions = {
        from: '"AuthApp" <authtimoth@gmail.com>', // Sender address
        to: email, // Receiver's email
        subject: "Welcome to AuthApp",
        html: `<p>Welcome, ${name}!</p><p>Thanks for joining AuthApp.</p>`, // Customize your welcome message
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        console.log("Welcome Email sent successfully", response);
    } catch (error) {
        console.log("Error sending welcome email", error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
}

const sendPasswordResetEmail = async (email, resetUrl) => {
    
    const mailOptions = {
        from: '"AuthApp" <authtimoth@gmail.com>', // Sender address
        to: email,
        subject: "Reset your password",
        html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        console.log("Reset password link sent successfully", response);
    } catch (error) {
        console.error('Error sending password reset email', error);
        throw new Error(`Error sending password reset email: ${error}`);
    }
};

const sendResetSuccessEmail = async (email) => {
    const mailOptions = {
        from: '"AuthApp" <authtimoth@gmail.com>',
        to: email,
        subject: "Password Reset Successful",
        html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        console.log("Password reset successful", response);
    } catch (error) {
        console.error('Error sending password reset success email', error);
        throw new Error(`Error sending password reset success email: ${error}`);
    }
};

const sendNotificationEmail = async (companyName) => {
    const mailOptions = {
        from: '"Message Notification" <authtimoth@gmail.com>', // Sender address
        to: [
            "ibratimoth@gmail.com",
            "samwelfumbi175@gmail.com",
            "ibramwakii@gmail.com"
        ], // List of recipients
        subject: "New Comment Received",
        html: `<p>New comment received from <strong>${companyName}</strong>.</p>`, // Message body
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        console.log("Notification email sent successfully", response);
    } catch (error) {
        console.error("Error sending notification email", error);
    }
};

module.exports = {
    sendVerificationEmail,
    sendWelcomeEmail,
    sendPasswordResetEmail,
    sendResetSuccessEmail,
    sendNotificationEmail
}
