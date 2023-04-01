"use strict";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const User = require("../databaseModels/userModel");

exports.usernameInUse = async (req, res, next) => {
  try {
    const userId = await User.findIdByName(req.body.username);
    if (userId[0].length != 0) {
      return res.status(409).send({
        message: "This username is already in use!",
      });
    }
    next();
  } catch (err) {
    console.log(err.message);
  }
};

exports.signUp = async (req, res, next) => {
  try {
    let formdata = req.body;
    bcrypt.hash(formdata.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).send({
          message: err,
        });
      } else {
        let user = new User(formdata.username, hash);
        user.addUser();
        return res.status(201).send({
          message: "Registered!",
        });
      }
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.login = async (req, res, next) => {
  try {
    const userDBO = await User.findAllByName(req.body.username);
    const userDO = userDBO[0];
    const user = userDO[0];
    if (userDO.length === 0) {
      return res.status(400).send({
        message: "Username or password incorrect!",
      });
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign(
          {
            username: user.username,
            userId: user.user_id,
          },
          process.env.JWT_SECRETKEY,
          { expiresIn: "7d" }
        );
        return res.status(200).send({
          message: "Logged in!",
          token,
          user: user,
        });
      } else {
        return res.status(400).send({
          message: "Username or password incorrect!",
        });
      }
    });
    next();
  } catch (err) {
    console.log(err.message);
  }
};
