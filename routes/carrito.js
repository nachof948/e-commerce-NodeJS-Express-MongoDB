const express = require('express');
const router = express.Router();

const { agregarProductos, modificarProductos, eliminarProductos } = require('../controllers/carrito');


/* POST */
router.route('/').post(agregarProductos);

/* PUT */
router.route('/productos-carrito/:productoId').post(modificarProductos);

/* DELETE */
router.route('/productos-carrito/:productoId').delete(eliminarProductos);

module.exports = router;
