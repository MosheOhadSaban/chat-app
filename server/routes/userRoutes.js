const express = require("express");
const router = express.Router();
const userControlles = require("../controllers/userControlles");

router.post("/", userControlles.registerUser);

router.post('/auth',userControlles.authUser)

module.exports = router;
