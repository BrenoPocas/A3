const voluntary = require('../model/voluntary')
const serviceUser = require('./user')
const user = require('../model/user')

class ServiceVoluntary {
    async create(email, password, nome_completo, cpf, estado, cidade) {
        if (!email || !password || !nome_completo || !cpf || !estado || !cidade) {
            throw new Error("Por favor, preencha todos os campos.")
        }

        try {
            await serviceUser.create(email, password)
            const registeredUser = await user.findOne({ where: { email } })
            const userId = registeredUser.id

            await voluntary.create({
                nome_completo,
                cpf,
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

module.exports = new ServiceVoluntary()