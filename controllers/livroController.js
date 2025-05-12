const { livros } = require('../models/livro');

exports.criarLivro = (req, res) => {
  const novo = { id: livros.length + 1, disponivel: true, ...req.body };
  livros.push(novo);
  res.status(201).json(novo);
};

exports.listarLivros = (req, res) => {
  const { autor, nome, disponivel } = req.query;

  let resultado = livros;

  if (nome) {
    resultado = resultado.filter(l => l.nome.toLowerCase().includes(nome.toLowerCase()));
  }

  if (autor) {
    resultado = resultado.filter(l => l.autor === autor);
  }

  if (disponivel === 'true') {
    resultado = resultado.filter(l => l.disponivel);
  }

  res.json(resultado);
};
