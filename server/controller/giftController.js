const { Gifts } = require("../models/Gift");

const giftController = {
  addGifts: async (req, res) => {
    const { name, price, image, category, user } = req.body;
    if (!name || !price) {
      return res
        .status(400)
        .json({ success: false, message: "Name or Price is requided" });
    }
    try {
      const newGifts = new Gifts({
        name,
        price,
        image,
        category: category || "Medium",
        user: req.userId,
      });

      await newGifts.save();
      res.status(200).json({
        success: true,
        message: "Gifts successfully",
        Gifts: newGifts,
      });
    } catch (error) {
      console.log(error);
      req.status(500).json({ success: false, message: "Sever is erorr" });
    }
  },

  getGifts: async (req, res) => {
    try {
      const gifts = await Gifts.find();
      res.status(200).json({ success: true, gifts });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  getGiftByUser: async (req, res) => {
    try {
      const gifts = await Gifts.find({ user: req.userId }).populate("user", [
        "username",
      ]);
      res.json({ success: true, gifts });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  updateGifts: async (req, res) => {
    const { name, price, image, category, user } = req.body;
    if (!name || !price) {
      return res
        .status(400)
        .json({ success: false, message: "Name or Price is requided" });
    }
    try {
      let upadateGifts = {
        name,
        price,
        image: image || "",
        category: category || "Medium",
        user: req.userId,
      };

      const postUpadateGifts = {
        _id: req.params.id,
        user: req.userId,
      };

      upadateGifts = await Gifts.findOneAndUpdate(
        postUpadateGifts,
        upadateGifts,
        { new: true }
      );

      // If not User Admin
      if (!upadateGifts) {
        return res.status(401).json({
          success: false,
          message: "ost not found or user not authorised",
        });
      }
      res.status(200).json({
        success: true,
        message: "Excellent progress!",
        Gifts: upadateGifts,
      });
    } catch (error) {
      console.log(error);
      req.status(500).json({ success: false, message: "Sever is erorr" });
    }
  },
  deleteGifts: async (req, res) => {
    try {
      const deleteCondition = { _id: req.params.id, user: req.userId };
      const deleteGifts = await Gifts.findOneAndDelete(deleteCondition);

      // User not authorised or post not found
      if (!deleteGifts)
        return res.status(401).json({
          success: false,
          message: "Post not found or user not authorised",
        });

      res.json({ success: true, gifts: deleteGifts });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = giftController;
