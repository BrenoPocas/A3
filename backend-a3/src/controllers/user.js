const serviceUser = require('../services/user')

class ControllerUser {
    async FindAll(req, res) {
        try {
            const result = await serviceUser.findAll()
            res.status(200).json({ result })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    async FindById(req, res) {
        const { id } = req.params
        try {
            const result = await serviceUser.findById(id)
            res.status(200).json({ result })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    async Create(req, res) {
        const { email, password } = req.body
        try {
            await serviceUser.create(email, password)
            res.status(201).json()
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    async Update(req, res) {
        const { id } = req.params
        const { email, password } = req.body
        try {
            const result = await serviceUser.update(id, email, password)
            res.status(200).json({ result })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    async Delete(req, res) {
        const { id } = req.params
        try {
            await serviceUser.delete(id)
            res.status(204).json()
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    async Login(req, res) {
        const { email, password } = req.body
        try {
            const result = await serviceUser.login(email, password)
            res.status(200).json({ result })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }
}

module.exports = new ControllerUser()