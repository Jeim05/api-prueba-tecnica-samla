const express = require("express");
const route = express.Router();
const usuarioController = require('../controllers/usuario')

route.post('/', usuarioController.create);
route.get('/', usuarioController.getAll);
route.get('/:id', usuarioController.getOne);

module.exports = route
