const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
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

let Items = mongoose.model("items", ItemSchema);
module.exports = { Items };
