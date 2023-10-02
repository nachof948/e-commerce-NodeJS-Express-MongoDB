const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true, 'nombre del producto']
    },
    descripcion:{
        type:String,
        required:[true, 'descripcion del producto']
    },
    precio:{
        type:Number,
        required:[true,'precio del producto']
    },
    vegano:{
        type:Boolean,
        required:[true,'tipo de producto']
    },
    categoria:{
        type:String,
        required:[true,'categoria del producto']
    }
})
const Producto = mongoose.model('Producto', productoSchema)
module.exports = Producto