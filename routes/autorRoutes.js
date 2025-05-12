const express = require('express');
const router = express.Router();
const controller = require('../controllers/autorController');

router.post('/', controller.criarAutor);
router.get('/', controller.listarAutores);

module.exports = router;
