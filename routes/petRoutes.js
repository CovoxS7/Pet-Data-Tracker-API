"use strict";

// Express
import express from "express";

// Middlewares
const userValidation = require("../middleware/userValidation");

// Controllers
const petController = require("../databaseController/petController");
const petDataController = require("../databaseController/petDataController");

export const petRoutes = express.Router();

petRoutes
  .route("/pets")
  .get(userValidation.isLoggedIn, petController.getPets, (req, res) => {})
  .post(userValidation.isLoggedIn, petController.addPet, (req, res) => {});

petRoutes
  .route("/petdata")
  .post(
    userValidation.isLoggedIn,
    petDataController.addPetData,
    (req, res) => {}
  );

petRoutes
  .route("/petdata/:pet_id")
  .get(
    userValidation.isLoggedIn,
    petDataController.getPetData,
    (req, res) => {}
  );
