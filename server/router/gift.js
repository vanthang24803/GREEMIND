const giftController = require("../controller/giftController");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

// Post Gift
router.post("/", verifyToken, giftController.addGifts);

// Get ALl Items
router.get("/all", giftController.getGifts);

// Get gifts by User
router.get("/:id", verifyToken, giftController.getGiftByUser);

// Update Items by Id
router.put("/:id", verifyToken, giftController.updateGifts);

// Delete Item by Id
router.delete("/:id", verifyToken, giftController.deleteGifts);



module.exports = router;
