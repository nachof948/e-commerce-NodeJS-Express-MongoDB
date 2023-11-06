const express = require("express");
const router = express.Router();

const { producto } = require('../controllers/producto');

router.route('/:productoId').get(producto);

module.exports = router;