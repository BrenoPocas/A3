const user = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const saltRounds = process.env.BCRYPT_ROUNDS
const secretKey = process.env.JWT_SECRET_KEY

class ServiceUser {
    async findAll() {
        return user.findAll()
    }

    async findById(id) {
        return user.findByPk(id)
    }

    async create(email, password) {
        if (!email || !password) {
            throw new Error("Email e password sao obrigatorios.")
        }

        const hashPassword = await bcrypt.hash(password, Number(saltRounds))

        await user.create({
            email,
            password: hashPassword
        })
    }

    async update(id, email, password) {
        const oldUser = await this.findById(id)

        oldUser.email = email || oldUser.email
        oldUser.password = password ? await bcrypt.hash(password, Number(saltRounds)) : oldUser.password

        oldUser.save()

        return oldUser
    }

    async delete(id) {
        const userToDelete = await this.findById(id)
        userToDelete.destroy()
    }

    async login(email, password) {
        if (!email || !password) {
            throw new Error("Email e senha são obrigatorios.")
        }

        const currentUser = await user.findOne({ where: { email } })

        if (!currentUser) {
            throw new Error("Email ou senha inválidos")
        }

        const verify = await bcrypt.compare(password, currentUser.password)

        if (verify) {
            return jwt.sign({ id: currentUser.id }, secretKey, { expiresIn: 60 * 60 })
        }

        throw new Error("Email ou senha inválidos.")
    }
}

module.exports = new ServiceUser()