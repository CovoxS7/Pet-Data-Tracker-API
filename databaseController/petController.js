"use strict";

const Pet = require("../databaseModels/petModel");

exports.getPets = async (req, res, next) => {
  try {
    const pets = await Pet.findByUserId(req.userData.userId);
    res.send(pets[0]);
    next();
  } catch (err) {
    console.log(err.message);
  }
};

exports.addPet = async (req, res, next) => {
  try {
    let pet = new Pet(
      req.userData.userId,
      req.body.name,
      req.body.race,
      req.body.birth,
      req.body.move_in_date
    );
    pet.addPet();
    return res.status(201).send({
      message: "Registered!",
    });
  } catch (err) {
    console.log(err.message);
  }
};
