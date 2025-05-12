const { autores } = require('../models/autor');

exports.criarAutor = (req, res) => {
  const novo = { id: autores.length + 1, ...req.body };
  autores.push(novo);
  res.status(201).json(novo);
};

exports.listarAutores = (req, res) => {
  res.json(autores);
};
