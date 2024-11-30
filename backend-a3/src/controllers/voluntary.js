const serviceVoluntary = require('../services/voluntary')

class ControllerVoluntary {
    async Create(req, res) {
        const { email, password, nome_completo, cpf, estado, cidade } = req.body
        try {
            await serviceVoluntary.create(email, password, nome_completo, cpf, estado, cidade)
            res.status(201).json()
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    //IMPLEMENTAR

    async FindAll(req, res) {
        try {
            const result = await serviceVoluntary.findAll()
            res.status(200).json({ result })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    async FindById(req, res) {
        const { id } = req.params
        try {
            const result = await serviceVoluntary.findById(id)
            res.status(200).json({ result })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    async Update(req, res) {
        const { id } = req.params
        const { email, password } = req.body
        try {
            const result = await serviceVoluntary.update(id, email, password)
            res.status(200).json({ result })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    async Delete(req, res) {
        const { id } = req.params
        try {
            await serviceVoluntary.delete(id)
            res.status(204).json()
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    async Login(req, res) {
        const { email, password } = req.body
        try {
            const result = await serviceVoluntary.login(email, password)
            res.status(200).json({ result })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }
}

module.exports = new ControllerVoluntary()