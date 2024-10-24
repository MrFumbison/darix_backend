const validator = require("validator");

const validateRegisterInput = ({ name, email, password }) => {
  if (!name || !email || !password) {
    return { valid: false, message: "All fields must be filled" };
  }

  if (!validator.isEmail(email)) {
    return { valid: false, message: "Email is not valid" };
  }

  // Extract the local part of the email address
  const localPart = email.split("@")[0];
  if (localPart[0] !== localPart[0].toLowerCase()) {
    return {
      valid: false,
      message: "Email must start with a lowercase letter",
    };
  }

  if (password.length < 7) {
    return {
      valid: false,
      message: "Password must be at least 8 characters long",
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one uppercase letter",
    };
  }

  if (!/[a-z]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one lowercase letter",
    };
  }

  if (!/\d/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one number",
    };
  }

  if (!/[\W_]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one special character",
    };
  }

  return { valid: true };
};

const validateVerificationCode = (code) => {
  if (!code) {
    return { valid: false, message: "Verification code is required" };
  }
  // Add any other checks if necessary (length, format, etc.)
  return { valid: true };
};

const validatePassword = ({ password }) => {
  if (!password) {
    return { valid: false, message: "All fields must be filled" };
  }

  if (password.length < 7) {
    return {
      valid: false,
      message: "Password must be at least 8 characters long",
    };
  }

  if (!/[A-Z]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one uppercase letter",
    };
  }

  if (!/[a-z]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one lowercase letter",
    };
  }

  if (!/\d/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one number",
    };
  }

  if (!/[\W_]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one special character",
    };
  }

  return { valid: true };
};

const validateEmail = (email) => {
  if (!email) {
    return { valid: false, message: "Email field must be filled" };
  }

  if (!validator.isEmail(email)) {
    return { valid: false, message: "Email is not valid" };
  }

  // Extract the local part of the email address
  const localPart = email.split("@")[0];
  if (localPart.length === 0 || localPart[0] !== localPart[0].toLowerCase()) {
    return {
      valid: false,
      message: "Email must start with a lowercase letter",
    };
  }

  return { valid: true };
};

module.exports = {
  validateRegisterInput,
  validateVerificationCode,
  validatePassword,
  validateEmail,
};
