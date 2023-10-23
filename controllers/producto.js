const Producto = require('../models/Producto');
const Carrito = require('../models/Carrito');
const GoogleCliente = require('../models/Cliente-Google');

const producto = async (req, res) => {
    try {
        const user = await GoogleCliente.find();
        const carrito = await Carrito.find();
        const productoId = req.params.productoId;
        const productoEspecifico = await Producto.findById(productoId); // Obtener el producto específico

        res.render('producto', { carrito: carrito, user: req.user, producto: productoEspecifico }); // Renderizar la vista con el producto específico
    } catch (error) {
        console.error(error);
        // Manejar el error apropiadamente, por ejemplo, renderizando una página de error.
        res.status(500).send('Error interno del servidor');
    }
};

module.exports = { producto };