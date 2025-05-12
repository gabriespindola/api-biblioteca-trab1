const express = require('express');
const router = express.Router();
const controller = require('../controllers/livroController');

router.post('/', controller.criarLivro);
router.get('/', controller.listarLivros);

module.exports = router;
