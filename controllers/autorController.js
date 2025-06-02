const autorService = require('../services/autorService');

exports.criarAutor = (req, res) => {
  const novo = autorService.criarAutor(req.body);
  res.status(201).json(novo);
};

exports.listarAutores = (req, res) => {
  res.json(autorService.listarAutores());
};
