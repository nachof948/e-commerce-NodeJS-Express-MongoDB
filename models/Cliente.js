const mongoose = require('mongoose')
const{isEmail} = require('validator')
const bcrypt = require('bcrypt')

const clienteSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Por favor ingrese un email"],
        unique:true,
        lowercase:true,
        validate:[isEmail, "Por favor ingrese un email valido"]
    },
    nombreCompleto:{
        type:String,
        required:[true,"Por favor ingrese su nombre completo"],
    },
    usuario:{
        type:String,
        required:[true,"Por favor ingrese un nombre de usuario"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Por favor ingrese un password"],
        minLength:[6,"Por favor ingrese un minimo de 6 caracteres"]
    }
})


const Cliente = mongoose.model('cliente',clienteSchema) //Nombre de la coleccion y el Esquema
module.exports = Cliente
