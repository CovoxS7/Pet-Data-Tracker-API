"use strict";

import { v4 as uuidv4 } from "uuid";
const db = require("../database/db");

class User {
  constructor(username, password) {
    this.user_id = uuidv4();
    this.username = username;
    this.password = password;
  }

  static findAllByName(username) {
    let stmt = `SELECT * FROM users WHERE username = LOWER(?)`;
    return db.execute(stmt, [username]);
  }

  static findIdByName(username) {
    let stmt = `SELECT user_id FROM users WHERE username = LOWER(?)`;
    return db.execute(stmt, [username]);
  }

  addUser() {
    let stmt = `INSERT INTO users(
        user_id,
        username,
        password
    )
    VALUEs(
        '${this.user_id}',
        LOWER('${this.username}'),
        '${this.password}'
    )`;
    return db.execute(stmt);
  }
}

module.exports = User;
