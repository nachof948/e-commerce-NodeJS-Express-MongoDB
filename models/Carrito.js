const mongoose = require('mongoose')

const carritoSchema = new mongoose.Schema({
    usuario:{
        type: mongoose.Types.ObjectId,
        ref:'GoogleCliente'
    },
    items:[{
        producto:{
            type: mongoose.Types.ObjectId,
            ref:'Producto'
        },
        nombre:{
            type: String,
            required: true
        },
        imagen:{
            type: String,
            required: true
        },
        cantidad:{
            type: Number,
            required: true
        },
        precio:{
            type: Number,
            required: true
        }
    }]
})

const Carrito = mongoose.model('Carrito', carritoSchema)
module.exports = Carrito