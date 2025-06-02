const { usuarios } = require('../models/usuario');




function autenticar(username, senha) {
  return usuarios.find(u => u.username === username && u.senha === senha);
}

module.exports = { autenticar };
