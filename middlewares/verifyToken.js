const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authenticateToken = (req, res, next) => {
  const token = req.session.accessToken; // Get token from cookies
  console.log("inafika", token);
  
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access token is missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid access token" });
    }
    req.user = user; // Attach user info to the request object
    console.log(req.user);
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = { authenticateToken };
