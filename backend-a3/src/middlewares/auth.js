const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = process.env.JWT_SECRET_KEY

function authMiddleware(req, res, next) {
    const token = req.headers["authorization"]

    if (!token) {
        res.status(400).json({ msg: "Token inválido ou não fornecido." })
        return
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            res.status(400).json({ msg: "Token inválido ou não fornecido." })
            return
        }

        req.session = decoded
        next()
    })
}

module.exports = authMiddleware