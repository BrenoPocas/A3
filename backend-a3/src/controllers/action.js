const serviceAcao = require('../services/action');

class ControllerAction {
  async Create(req, res) {
    const { title, description, date, location, ongId } = req.body;

    if (!title || !description || !date || !location || !ongId) {
      return res.status(400).json({ msg: 'Todos os campos são obrigatórios.' });
    }

    try {
      await serviceAcao.create(title, description, date, location, ongId);
      res.status(201).json({ msg: 'Ação criada com sucesso.' });
    } catch (e) {
      res.status(500).json({ msg: `Erro ao criar ação: ${e.message}` });
    }
  }

  async FindAll(req, res) {
    try {
      const result = await serviceAcao.findAll();
      res.status(200).json({ result });
    } catch (e) {
      res.status(500).json({ msg: `Erro ao listar ações: ${e.message}` });
    }
  }

  async FindAllByOngId(req, res) {
    const { ongId } = req.params
    try {
      const result = await serviceAcao.findAllByOngId(ongId)
      res.status(200).json({ result });
    } catch (e) {
      res.status(500).json({ msg: `Erro ao buscar ação: ${e.message}` });
    }
  }

  async FindById(req, res) {
    const { id } = req.params;

    try {
      const result = await serviceAcao.findById(id);
      if (!result) {
        return res.status(404).json({ msg: 'Ação não encontrada.' });
      }
      res.status(200).json({ result });
    } catch (e) {
      res.status(500).json({ msg: `Erro ao buscar ação: ${e.message}` });
    }
  }

  async Update(req, res) {
    const { id } = req.params;
    const { title, description, date, location } = req.body;

    try {
      const result = await serviceAcao.update(id, title, description, date, location);
      if (!result) {
        return res.status(404).json({ msg: 'Ação não encontrada.' });
      }
      res.status(200).json({ msg: 'Ação atualizada com sucesso.', result });
    } catch (e) {
      res.status(500).json({ msg: `Erro ao atualizar ação: ${e.message}` });
    }
  }

  async Delete(req, res) {
    const { id } = req.params;

    try {
      await serviceAcao.delete(id);
      res.status(204).json();
    } catch (e) {
      res.status(500).json({ msg: `Erro ao deletar ação: ${e.message}` });
    }
  }
}

module.exports = new ControllerAction();
