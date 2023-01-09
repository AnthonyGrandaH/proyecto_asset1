const express = require('express');
const pool = require('../db')
const { createUsuarios, login  } = require("../controller/loginController")
const router = express.Router()
router.post('/login', login)

router.post('/register', createUsuarios)

module.exports = router;