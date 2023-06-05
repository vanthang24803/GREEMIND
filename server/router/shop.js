const itemController = require("../controller/itemController");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

// Post Items
router.post("/", verifyToken, itemController.addItems);

// Get All Items
router.get("/", itemController.getItems);

// Get Items By User
router.get("/:id", verifyToken, itemController.getItemsByUser);

// Update Items 
router.put("/:id", verifyToken, itemController.updateItems);

// Delete Items
router.delete("/:id", verifyToken, itemController.deleteItems);


module.exports = router;
