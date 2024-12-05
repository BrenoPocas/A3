const action = require('../model/action')

class ServiceAction {

  async findAll() {
    return action.findAll()
  }

  async findById(id) {
    return action.findByPk(id)
  }

  async findAllByOngId(ongId) {
    return action.findAll({ where: { ongId } })
  }

  async create(title, description, date, location, ongId) {
    if (!title || !description || !date || !location || !ongId) {
      throw new Error("Todos os dados sao obrigatorios")
    }

    await action.create({
      title,
      description,
      date,
      location,
      ongId
    })
  }

  async update(id, title, description, date, location) {
    const oldAction = await this.findById(id)

    oldAction.title = title || oldAction.title
    oldAction.description = description || oldAction.description
    oldAction.date = date || oldAction.date
    oldAction.location = location || oldAction.location

    oldAction.save()

    return oldAction
  }

  async delete(id) {
    const actionToDelete = await this.findById(id)
    actionToDelete.destroy()
  }
}

module.exports = new ServiceAction();