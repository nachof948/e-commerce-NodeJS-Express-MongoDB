const mongoose = require('mongoose')

const facebookSchema = new mongoose.Schema({
    userName:String,
    facebookId:String
})

const FacebookCliente = mongoose.model('cliente-facebook',facebookSchema) //Nombre de la coleccion y el Esquema
module.exports = FacebookCliente
