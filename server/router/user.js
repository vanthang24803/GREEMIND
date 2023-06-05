const userController = require("../controller/userController");
const verifyToken = require("../middleware/auth");
const express = require("express");
const router = express.Router();

// Register User POST

router.post("/register", userController.register);

// Login User POST

router.post("/login", userController.login);

// Check login status

router.get("/", verifyToken, userController.checkUser);

// Get User by Id
router.get("/:id", verifyToken, userController.getUserById);

// Update User


module.exports = router;
