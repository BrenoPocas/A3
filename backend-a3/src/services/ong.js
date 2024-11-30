const ong = require('../model/ong')
const serviceUser = require('./user')
const user = require('../model/user')

class ServiceOng {
    async create(email, password, nome_fantasia, cnpj, estado, cidade) {
        if (!email || !password || !nome_fantasia || !cnpj || !estado || !cidade) {
            throw new Error("Por favor, preencha todos os campos.")
        }

        try {
            await serviceUser.create(email, password)
            const registeredUser = await user.findOne({ where: { email } })
            const userId = registeredUser.id

            await ong.create({
                nome_fantasia,
                cnpj,
                estado,
                cidade,
                userId
            })

            return { registeredUser };
        } catch (e) {
            throw new Error("Nao foi possivel registrar usuario");
        }
    }
}

module.exports = new ServiceOng()