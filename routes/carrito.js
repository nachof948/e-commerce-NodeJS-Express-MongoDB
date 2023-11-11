const express = require('express');
const router = express.Router();

const { mostrarCarrito, agregarProductos, restarProductos, eliminarProductos,comprarProductos } = require('../controllers/carrito');

router.route('/').get(mostrarCarrito)


router.route('/agregar').post(agregarProductos);

router.route('/restar').post(restarProductos);

router.route('/eliminar/:id').get(eliminarProductos);

router.route('/comprar').post(comprarProductos);

module.exports = router;
