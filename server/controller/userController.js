const { User } = require("../models/User");
const { Items } = require("../models/Shop");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const userController = {
  register: async (req, res) => {
    const { username, password } = req.body;

    // Check User

    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Missing username or password" });
    }
    try {
      const user = await User.findOne({
        username: username,
      });
      if (user) {
        return res
          .status(400)
          .json({ success: false, message: "Username already exists" });
      }

      //   Hash password

      const hashedPassword = await argon2.hash(password);

      //   Create User

      const newUser = new User({
        username: username,
        password: hashedPassword,
      });

      await newUser.save();

      //   Return AccessToken
      const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.ACCESS_TOKEN
      );

      res.status(200).json({
        success: true,
        message: "User created successfully",
        accessToken,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "User creation failed" });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password)
      return res
        .status(400)
        .json({ success: false, message: "Missing username and/or password" });

    try {
      // Check for existing user
      const user = await User.findOne({ username });
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "Incorrect username or password" });

      // Username found
      const passwordValid = await argon2.verify(user.password, password);
      if (!passwordValid)
        return res
          .status(400)
          .json({ success: false, message: "Incorrect username or password" });

      // Return token
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN
      );

      res.json({
        success: true,
        message: "User logged in successfully",
        accessToken,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  checkUser: async (req, res) => {
    try {
      const user = await User.findById(req.userId).select("-password");
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "User not found" });
      res.json({ success: true, user });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
};

module.exports = userController;
