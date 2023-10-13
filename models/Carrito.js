const mongoose = require('mongoose')

const carritoSchema = new mongoose.Schema({
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
})

const Carrito = mongoose.model('Carrito', carritoSchema)
module.exports = Carrito