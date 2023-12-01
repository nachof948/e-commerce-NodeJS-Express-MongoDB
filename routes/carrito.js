const express = require('express');
const router = express.Router();

const { mostrarCarrito, agregarProductos, restarProductos, eliminarProductos } = require('../controllers/carrito');

router.route('/').get(mostrarCarrito)


router.route('/agregar').post(agregarProductos);

router.route('/restar').post(restarProductos);

router.route('/eliminar/:id').get(eliminarProductos);


module.exports = router;
