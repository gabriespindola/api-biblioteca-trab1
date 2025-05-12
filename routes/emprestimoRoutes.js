const express = require('express');
const router = express.Router();
const controller = require('../controllers/emprestimoController');

router.post('/retirar', controller.retirarLivro);
router.post('/devolver', controller.devolverLivro);

module.exports = router;
