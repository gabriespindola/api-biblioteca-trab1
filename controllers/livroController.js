const livroService = require('../services/livroService');

exports.criarLivro = (req, res) => {
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
};

exports.listarLivros = (req, res) => {
  const livros = livroService.listarLivros(req.query);
  res.json(livros);
};
