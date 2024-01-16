const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
  resp.status(200).json({
    msg: "connected",
  });
});

app.post("/auth/register", async (req, resp) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log("req.body", req.body);
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

  return resp.status(200).json({
    msg: "connected",
  });
});

app.listen(process.env.PORT);
