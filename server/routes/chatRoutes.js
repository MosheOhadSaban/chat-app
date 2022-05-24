const express = require("express")
const router = require("./userRoutes")
const chatControllers = require("../controllers/chatControllers")


router.get("/:id",chatControllers.fetchUserChats)
router.post("/create-group",chatControllers.createGroupChat)


// router.put("/remove-group", removeFromGroup)
// router.put("/group-add", addToGroup)

module.exports = router