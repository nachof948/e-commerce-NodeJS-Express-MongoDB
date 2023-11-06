const express = require('express');
const router = express.Router();

const { mostrarCarrito, agregarProductos, modificarProductos, eliminarProductos,comprarProductos } = require('../controllers/carrito');

router.route('/').get(mostrarCarrito)


router.route('/agregar').post(agregarProductos);

router.route('/modificar/:id').post(modificarProductos);

router.route('/eliminar/:id').get(eliminarProductos);

router.route('/comprar').post(comprarProductos);

module.exports = router;
