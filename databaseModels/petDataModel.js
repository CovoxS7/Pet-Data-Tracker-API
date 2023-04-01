"use strict";

const db = require("../database/db");

class PetData {
  constructor(pet_id, date, weight, remark) {
    this.pet_id = pet_id;
    this.date = date;
    this.weight = weight;
    this.remark = remark;
  }
  static findByPetId(id) {
    let stmt = `SELECT * FROM pet_data WHERE pet_id = ?`;
    return db.execute(stmt, [id]);
  }
  addPetData() {
    let stmt = `INSERT INTO pet_data(
      pet_id,
      date,
      weight,
      remark
    )
    VALUES(
      '${this.pet_id}',
      '${this.date}',
      '${this.weight}',
      '${this.remark}'
    )`;
    return db.execute(stmt);
  }
}

module.exports = PetData;
