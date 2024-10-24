const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const generateTokenAndSetCookie = (res, userId) => {
    // Generate access token (short lifespan, e.g., 15 minutes)
    const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15m',  // Use environment variable or fallback to 15 minutes
    });

    // Generate refresh token (long lifespan, e.g., 7 days)
    const refreshToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '7d',  // Use environment variable or fallback to 7 days
    });

    // Set access token in HTTP-only cookie (for client requests)
    res.cookie('accessToken', accessToken, {
        httpOnly: true, // Protect against XSS attacks
        secure: process.env.NODE_ENV === 'production', // Send only over HTTPS in production
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 15 * 60 * 1000, // 15 minutes, matching the token's expiration
    });

    // Set refresh token in HTTP-only cookie (for refreshing access tokens)
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days, matching the refresh token's expiration
    });

    return { accessToken, refreshToken };
};

module.exports = generateTokenAndSetCookie;
