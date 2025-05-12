const { usuarios } = require('../models/Usuario');

exports.login = (req, res) => {
  const { username, senha } = req.body;
  const usuario = usuarios.find(u => u.username === username && u.senha === senha);
  if (!usuario) return res.status(401).json({ erro: 'Credenciais inválidas' });
  res.json({ mensagem: 'Login bem-sucedido' });
};
