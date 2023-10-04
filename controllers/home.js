const Producto = require('../models/Producto')

const home = async (req, res) => {
    try {
        const productos = await Producto.find()
        res.render('home', {productos: productos})
    } catch (error) {
        console.error(error)
        res.status(500).send('Error interno del servidor')
    }
}

module.exports = { home }