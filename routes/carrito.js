const express = require('express');
const router = express.Router();

const { mostrarCarrito, agregarProductos, modificarProductos, eliminarProductos } = require('../controllers/carrito');

router.route('/').get(mostrarCarrito)


router.route('/agregar').post(agregarProductos);

router.route('/modificar/:id').get(modificarProductos);

router.route('/eliminar/:id').get(eliminarProductos);

module.exports = router;
