const clienteService = require('../services/clienteService');

exports.criarCliente = (req, res) => {
  const novo = clienteService.criarCliente(req.body);
  res.status(201).json(novo);
};

exports.listarClientes = (req, res) => {
  res.json(clienteService.listarClientes());
};
