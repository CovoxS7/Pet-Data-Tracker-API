"use strict";

const PetData = require("../databaseModels/petDataModel");

exports.getPetData = async (req, res, next) => {
  try {
    const petData = await PetData.findByPetId(req.params.pet_id);
    res.send(petData[0]);
    next();
  } catch (err) {
    console.log(err.message);
  }
};

exports.addPetData = async (req, res, next) => {
  try {
    let petData = new PetData(
      req.body.pet_id,
      req.body.date,
      req.body.weight,
      req.body.remark
    );
    petData.addPetData();
    return res.status(201).send({
      message: "Data saved",
    });
  } catch (err) {
    console.log(err.message);
  }
};
