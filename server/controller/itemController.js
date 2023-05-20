const { Items } = require("../models/Shop");

const itemController = {
  addItems: async (req, res) => {
    const { name, price, image, category, user } = req.body;
    if (!name || !price) {
      return res
        .status(400)
        .json({ success: false, message: "Name or Price is requided" });
    }
    try {
      const newItems = new Items({
        name,
        price,
        image,
        category: category || "Medium",
        user: req.userId,
      });

      await newItems.save();
      res.status(200).json({
        success: true,
        message: "Items successfully",
        Items: newItems,
      });
    } catch (error) {
      console.log(error);
      req.status(500).json({ success: false, message: "Sever is erorr" });
    }
  },

  getItems: async (req, res) => {
    try {
      const items = await Items.find();
      res.status(200).json({ success: true, items });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  getItemsByUser: async (req, res) => {
    try {
      const items = await Items.find({ user: req.userId }).populate("user", [
        "username",
      ]);
      res.json({ success: true, items });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  updateItems: async (req, res) => {
    const { name, price, image, category, user } = req.body;
    if (!name || !price) {
      return res
        .status(400)
        .json({ success: false, message: "Name or Price is requided" });
    }
    try {
      let upadateItems = {
        name,
        price,
        image: image || "",
        category: category || "Medium",
        user: req.userId,
      };

      const postUpadateItems = {
        _id: req.params.id,
        user: req.userId,
      };

      upadateItems = await Items.findOneAndUpdate(
        postUpadateItems,
        upadateItems,
        { new: true }
      );

      // If not User Admin
      if (!upadateItems) {
        return res.status(401).json({
          success: false,
          message: "ost not found or user not authorised",
        });
      }
      res.status(200).json({
        success: true,
        message: "Excellent progress!",
        items: upadateItems,
      });
    } catch (error) {
      console.log(error);
      req.status(500).json({ success: false, message: "Sever is erorr" });
    }
  },

  deleteItems: async (req, res) => {
    try {
      const deleteCondition = { _id: req.params.id, user: req.userId };
      const deleteItem = await Items.findOneAndDelete(deleteCondition);

      // User not authorised or post not found
      if (!deleteItem)
        return res.status(401).json({
          success: false,
          message: "Post not found or user not authorised",
        });

      res.json({ success: true, items: deleteItem });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

module.exports = itemController;
