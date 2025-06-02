const { livros } = require('../models/Livro');

function criarLivro(data) {
  const novo = { id: livros.length + 1, disponivel: true, ...data };
  livros.push(novo);
  return novo;
}

function listarLivros(filtros) {
  let resultado = livros;

  if (filtros.nome) {
    resultado = resultado.filter(l =>
      l.nome.toLowerCase().includes(filtros.nome.toLowerCase())
    );
  }

  if (filtros.autor) {
    resultado = resultado.filter(l => l.autor === filtros.autor);
  }

  if (filtros.disponivel === 'true') {
    resultado = resultado.filter(l => l.disponivel);
  }

  return resultado;
}

module.exports = {
  criarLivro,
  listarLivros
};
