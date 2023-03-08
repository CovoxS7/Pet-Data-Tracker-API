"use strict";

// Express
import express from "express";

// Middlewares
const userValidation = require("../middleware/userValidation");

// Controllers
const petController = require("../databaseController/petController");

export const petRoutes = express.Router();

petRoutes
  .route("/pets")
  .get(userValidation.isLoggedIn, petController.getPets, (req, res) => {})
  .post(userValidation.isLoggedIn, petController.addPet, (req, res) => {});
