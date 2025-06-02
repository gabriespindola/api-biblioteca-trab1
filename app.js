const express = require('express');
const app = express();
app.use(express.json());

const usuarioRoutes = require('./routes/usuarioRoutes');
const autorRoutes = require('./routes/autorRoutes');
const livroRoutes = require('./routes/livroRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const emprestimoRoutes = require('./routes/emprestimoRoutes');



app.use('/usuarios', usuarioRoutes);
app.use('/autores', autorRoutes);
app.use('/livros', livroRoutes);
app.use('/clientes', clienteRoutes);
app.use('/emprestimos', emprestimoRoutes);

module.exports = app;
