const express = require("express");
const { dashboardController } = require("../controllers/userController");
const router = express.Router();

router.get("/dashboard", dashboardController);

module.exports = router;