const mongoose = require('mongoose')

const googleSchema = new mongoose.Schema({
    username:String,
    googleId:String,
    image:String
})

const GoogleCliente = mongoose.model('cliente-google',googleSchema) //Nombre de la coleccion y el Esquema
module.exports = GoogleCliente
