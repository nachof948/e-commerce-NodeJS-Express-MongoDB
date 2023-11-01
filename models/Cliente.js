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
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Por favor ingrese un password"],
        minLength:[6,"Por favor ingrese un minimo de 6 caracteres"]
    }
})

clienteSchema.pre('save', async function(next) { /*(.pre (PREVIO)) INFORMO QUE EL USUARIO ESTA SIENDO CREADO */
    const salt = await bcrypt.genSalt() /* Se utiliza para generar un valor aleatorio */
    this.password = await bcrypt.hash(this.password, salt) 
    console.log('El nuevo usuario esta siendo creado y se pasara a guardar',this)
    next()
})

clienteSchema.post('save', function(doc, next) { /*(.post (POSTERIOR)) INFORMO QUE EL NUEVO USUARIO YA FUE CREADO */
    console.log('El nuevo usuario fue creado y guardado', doc)/* DOC es toda la informacion json{} */
    next()
})

clienteSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const Cliente = mongoose.model('cliente',clienteSchema) //Nombre de la coleccion y el Esquema
module.exports = Cliente
