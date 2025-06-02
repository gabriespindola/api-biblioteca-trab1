const { autores } = require('../models/Autor');

function criarAutor(data) {
  const novo = { id: autores.length + 1, ...data };
  autores.push(novo);
  return novo;
}

function listarAutores() {
  return autores;
}

module.exports = {
  criarAutor,
  listarAutores
};
