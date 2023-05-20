const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRouter = require("./router/user");
const itemRouter = require("./router/shop");
const app = express();
dotenv.config();

const PORT = 8080;
app.use(cors());
app.use(morgan("common"));
app.use(express.json());

// Router
app.use("/api/user", userRouter);
app.use("/api/shop", itemRouter);
// Connect to MongoDatabase

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOBD_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connect();
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
