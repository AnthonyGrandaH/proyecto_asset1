const jwt = require('jsonwebtoken') 

const tokenSign = async (user) => { // Genera Token
    return jwt.sign(
        {
            _id: user._id, 
            //role: user.role
        }, 
        process.env.JWT_SECRET, 
        {
            expiresIn: "2h", // tiempo de vida
        }
    );
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
        return null
    }
}

const decodeSign = (token) => { //Verificar que el token sea valido y correcto
    return jwt.decode(token, null)
}



module.exports = { tokenSign, decodeSign, verifyToken }