const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "items",
  },
});

let User = mongoose.model("users", UserSchema);
module.exports = { User };
