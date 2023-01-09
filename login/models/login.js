const db = require('../db');
const bcrypt = require("bcrypt")

const Users = {}

Users.create = (name, email, password) => {
    return db.none("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, password])
}

Users.findone = email => {
    return db.none('SELECT * FROM users WHERE user_email = $1', email)
}

module.exports = Users