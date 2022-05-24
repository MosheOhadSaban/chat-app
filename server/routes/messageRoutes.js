const express = require("express");
const router = express.Router();
const messageControllers = require("../controllers/messageControllers");

router.post("/", messageControllers.addMessage);
router.get("/:chatId", messageControllers.fetchAllChatMessages);

module.exports = router;
