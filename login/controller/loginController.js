const Usuarios = require('../models/login')
const pool = require("../db")
const bcrypt = require("bcrypt")
const { tokenSign } = require ("../middleware/generateToken")

const createUsuarios= async (req, res, next) => {
    const { name, email, password } = req.body;
    
    try {
        const user = await pool.query("SELECT * FROM users WHERE user_email = $2", [
            email
        ]);
        //Verificar que el usuario que registra ya existe
        if (user.rows.length > 0) {
            return res.status(401).json("User already exist!");
        }
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);
        Usuarios.create(name, email, password)
        res.send("Usuario creado")
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await 
        //pool.none("SELECT * FROM users WHERE user_email = $1", [email])
        Usuarios.findone([email])
        console.log(email)
        console.log("contrasena "+password)
        console.log("contrasena 2" +pool.query("SELECT * FROM users WHERE user_password = $2", [password]))
        const checkpassword = await compare(password, pool.one("SELECT * FROM users WHERE user_password = $2", [password]))
        
        
        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }
    }catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}


module.exports = {
    createUsuarios, login
}