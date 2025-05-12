const { clientes } = require('../models/cliente');

exports.criarCliente = (req, res) => {
  const novo = { id: clientes.length + 1, ...req.body };
  clientes.push(novo);
  res.status(201).json(novo);
};

exports.listarClientes = (req, res) => {
  res.json(clientes);
};
