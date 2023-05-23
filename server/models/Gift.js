const mongoose = require("mongoose");

const GiftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    enum: ["Big", "Medium", "Small"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

let Gifts = mongoose.model("gifts", GiftSchema);
module.exports = { Gifts };
