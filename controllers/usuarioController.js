const usuarioService = require('../services/usuarioService');

exports.login = (req, res) => {
  const { username, senha } = req.body;
  const usuario = usuarioService.autenticar(username, senha);
  if (!usuario) return res.status(401).json({ erro: 'Credenciais inválidas' });
  res.json({ mensagem: 'Login bem-sucedido' });
};
