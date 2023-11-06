const Carrito = require('../models/Carrito')
const compra = async(req,res)=>{
    try{
        const comprar = await Carrito.deleteMany({})
        console.log('Compra realizada', comprar)
        res.render('compra')
    }
    catch(err){console.log(err)
}
}

module.exports = { 
    compra
}