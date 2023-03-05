"use strict";

// Express
import express from "express";

// Middlewares
const userValidation = require("../middleware/userValidation");

// Controllers
const userController = require("../databaseController/userController");

export const authRoutes = express.Router();

authRoutes
  .route("/sign-up")
  .post(
    userValidation.validateRegister,
    userController.usernameInUse,
    userController.signUp,
    (req, res, next) => {}
  );

authRoutes.route("/login").post(userController.login, (req, res, next) => {});
