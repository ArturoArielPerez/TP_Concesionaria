const express = require('express');
const router = express.Router();

const marcasController = require('../controller/marcasController');

router.get('/', marcasController.lista);
router.get('/:marca', marcasController.detalle);

module.exports = router;