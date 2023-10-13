const Producto = require('../models/Producto')
const GoogleCliente= require('../models/Cliente-Google')
const home = async (req, res) => {
    try {
        const user = await GoogleCliente.find()
        const productos = await Producto.find()
        res.render('home', {productos: productos, user:req.user})
    } catch (error) {
        console.error(error)
        res.status(500).send('Error interno del servidor')
    }
}

module.exports = { home }