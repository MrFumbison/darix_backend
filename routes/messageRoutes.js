const express = require("express");
const {
  sendMessage,
  getMessages,
  getMessageById,
  deleteMessageById,
  deleteAllMessages,
} = require("../controllers/messageController");
const { authenticateToken } = require("../middlewares/verifyToken");
const router = express.Router();

// use.router(authenticateToken);
//send a message for support
router.post("/sendmessage", sendMessage);

//getAll messages
router.get("/getAll", getMessages);

//get message by id
router.get("/getmessage/:id", getMessageById);

//delete messsage by id
router.delete("/delete/:id", deleteMessageById);

//deleteAll messages
router.delete("/deleteAll", deleteAllMessages);

module.exports = router;
