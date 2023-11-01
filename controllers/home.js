const Producto = require('../models/Producto');
const GoogleCliente = require('../models/Cliente-Google');
const Carrito = require('../models/Carrito');
const Cliente = require('../models/Cliente');
const home = async (req, res) => {
    try {

        const carrito = await Carrito.find()
        const productos = await Producto.find();
        res.render('home', { productos: productos, user: req.user, carrito: carrito, cliente:req.user});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
};


module.exports = { home };
