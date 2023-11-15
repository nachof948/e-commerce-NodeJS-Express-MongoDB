const Carrito = require('../models/Carrito')
const compra = async(req,res)=>{
    try{
        const comprar = await Carrito.deleteMany({})
        res.render('compra')
    }
    catch(err){
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = { 
    compra
}