const { emprestimos } = require('../models/Emprestimo');
const { livros } = require('../models/Livro');

function retirarLivro(clienteId, livroId) {
  const emprestimosCliente = emprestimos.filter(
    e => e.clienteId === clienteId && !e.dataDevolucao
  );

  if (emprestimosCliente.length >= 3) {
    return { erro: 'Cliente já retirou 3 livros' };
  }

  const livro = livros.find(l => l.id === livroId);
  if (!livro || !livro.disponivel) {
    return { erro: 'Livro não está disponível' };
  }

  livro.disponivel = false;
  const hoje = new Date();
  const dataPrevista = new Date();
  dataPrevista.setDate(hoje.getDate() + 7);

  const novoEmprestimo = {
    id: emprestimos.length + 1,
    clienteId,
    livroId,
    dataRetirada: hoje,
    dataPrevista,
    dataDevolucao: null
  };

  emprestimos.push(novoEmprestimo);
  return novoEmprestimo;
}

function devolverLivro(emprestimoId) {
  const emprestimo = emprestimos.find(e => e.id === emprestimoId);

  if (!emprestimo || emprestimo.dataDevolucao) {
    return { erro: 'Empréstimo inválido ou já devolvido' };
  }

  const hoje = new Date();
  emprestimo.dataDevolucao = hoje;

  const livro = livros.find(l => l.id === emprestimo.livroId);
  if (livro) livro.disponivel = true;

  const diasAtraso = Math.max(
    0,
    Math.ceil((hoje - new Date(emprestimo.dataPrevista)) / (1000 * 60 * 60 * 24))
  );

  return { mensagem: 'Livro devolvido', diasAtraso };
}

module.exports = {
  retirarLivro,
  devolverLivro
};
