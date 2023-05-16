const userController = require("../controller/userController");
const express = require("express");
const router = express.Router();

// Register User POST

router.post("/register", userController.register)

// Login User POST

router.post("/login", userController.login);


module.exports = router;