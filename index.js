const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");
var cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.status(200).json({
    msg: "connected",
  });
});

app.post("/auth/register", async (req, resp) => {
  const { name, email, password, confirmPassword } = req.body;
  //validate body
  if (!name) {
    return resp.status(400).json({
      msg: "not name provided",
    });
  }
  if (!email) {
    return resp.status(400).json({
      msg: "not email provided",
    });
  }
  if (!password) {
    return resp.status(400).json({
      msg: "not password provided",
    });
  }
  if (!confirmPassword) {
    return resp.status(400).json({
      msg: "not confirm password provided",
    });
  }

  if (password !== confirmPassword) {
    return resp.status(400).json({
      msg: "passwords should match",
    });
  }

  const userExist = await User.findOne({
    email,
  });

  if (userExist) {
    return resp.status(400).json({
      msg: "email is already taken",
    });
  }

  try {
    const hash = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, hash);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return resp.status(200).json({
      msg: "connected",
      data: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    return resp.status(400).json(error);
  }
});

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT);
    console.log("server has started successfully, PORT: ", process.env.PORT);
  })
  .catch((error) => {
    console.error(error);
  });
