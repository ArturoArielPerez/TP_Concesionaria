const express = require('express');
const router = express.Router();

const sucursalesController = require('../controller/sucursalesController');

router.get('/', sucursalesController.sucursal);
router.get('/:sucursal', sucursalesController.espefico);

module.exports = router;