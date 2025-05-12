const express = require('express');
const router = express.Router();
const controller = require('../controllers/clienteController');

router.post('/', controller.criarCliente);
router.get('/', controller.listarClientes);

module.exports = router;
