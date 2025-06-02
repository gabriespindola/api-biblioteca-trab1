const emprestimoService = require('../services/emprestimoService');

exports.retirarLivro = (req, res) => {
  const { clienteId, livroId } = req.body;
  const resultado = emprestimoService.retirarLivro(clienteId, livroId);

  if (resultado.erro) {
    return res.status(400).json({ erro: resultado.erro });
  }

  res.status(201).json(resultado);
};

exports.devolverLivro = (req, res) => {
  const { emprestimoId } = req.body;
  const resultado = emprestimoService.devolverLivro(emprestimoId);

  if (resultado.erro) {
    return res.status(400).json({ erro: resultado.erro });
  }

  res.json(resultado);
};
