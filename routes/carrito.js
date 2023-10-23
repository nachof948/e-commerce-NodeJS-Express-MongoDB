const express = require('express');
const router = express.Router();

const { mostrarCarrito, agregarProductos, modificarProductos, eliminarProductos } = require('../controllers/carrito');

router.route('/').get(mostrarCarrito)
/* POST */
router.route('/').post(agregarProductos);

/* PUT */
router.route('/:productoId').post(modificarProductos);

/* DELETE */
router.route('/:productoId').delete(eliminarProductos);

module.exports = router;
