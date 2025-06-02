const { clientes } = require('../models/Cliente');

function criarCliente(data) {
  const novo = { id: clientes.length + 1, ...data };
  clientes.push(novo);
  return novo;
}

function listarClientes() {
  return clientes;
}

module.exports = {
  criarCliente,
  listarClientes
};
