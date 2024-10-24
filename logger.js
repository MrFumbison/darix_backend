// logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

// Create logger
const logger = createLogger({
    format: combine(
        timestamp(),
        colorize(), // colorize console output
        logFormat
    ),
    transports: [
        new transports.Console(),  // Log to console
        new transports.File({ filename: './logs/app.log', level: 'info' }),  // Log all info level and above
        new transports.File({ filename: './logs/error.log', level: 'error' }) // Log only error level
    ],
});

module.exports = logger;
