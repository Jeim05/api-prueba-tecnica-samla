const modeloUsarios = require("../models/usuarios");

class usuarioController {
  constructor() {}

  // Es un metodo asincrono porque va a esperar una respuesta
  async create(req, res) {
    try {
      const data = await modeloUsarios.create(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(201).send(error);
    }
  }

  async getAll(req, res) {
    try {
      const data = await modeloUsarios.getAll(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(201).send(error);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const data = await modeloUsarios.getOne(id);
      res.status(201).json(data);
    } catch (error) {
      res.status(201).send(error);
    }
  }
}

module.exports = new usuarioController();
