const { emprestimos } = require('../models/emprestimo');
const { livros } = require('../modelslivro');

exports.retirarLivro = (req, res) => {
  const { clienteId, livroId } = req.body;

  const emprestimosCliente = emprestimos.filter(e => e.clienteId === clienteId && !e.dataDevolucao);
  if (emprestimosCliente.length >= 3) {
    return res.status(400).json({ erro: 'Cliente já retirou 3 livros' });
  }

  const livro = livros.find(l => l.id === livroId);
  if (!livro || !livro.disponivel) {
    return res.status(400).json({ erro: 'Livro não está disponível' });
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
  res.status(201).json(novoEmprestimo);
};

exports.devolverLivro = (req, res) => {
  const { emprestimoId } = req.body;
  const emprestimo = emprestimos.find(e => e.id === emprestimoId);

  if (!emprestimo || emprestimo.dataDevolucao) {
    return res.status(400).json({ erro: 'Empréstimo inválido ou já devolvido' });
  }

  const hoje = new Date();
  emprestimo.dataDevolucao = hoje;

  const livro = livros.find(l => l.id === emprestimo.livroId);
  if (livro) livro.disponivel = true;

  const diasAtraso = Math.max(
    0,
    Math.ceil((hoje - new Date(emprestimo.dataPrevista)) / (1000 * 60 * 60 * 24))
  );

  res.json({ mensagem: 'Livro devolvido', diasAtraso });
};
