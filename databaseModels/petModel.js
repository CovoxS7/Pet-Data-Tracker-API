"use strict";

const db = require("../database/db");

class Pet {
  constructor(user_id, name, race, birth, move_in_date) {
    this.user_id = user_id;
    this.name = name;
    this.race = race;
    this.birth = birth;
    this.move_in_date = move_in_date;
  }

  static findByUserId(id) {
    let stmt = `SELECT * FROM pets WHERE user_id = ${id}`;
    return db.execute(stmt);
  }

  addAnimal() {
    let stmt = `INSERT INTO pets(
      user_id,
      name,
      race,
      birth,
      move_in_date
    )
    VALUES(
      '${this.user_id}',
      '${this.name}',
      '${this.race}',
      '${this.birth}',
      '${this.move_in_date}'
    )`;
    return db.execute(stmt);
  }
}

module.exports = Pet;
