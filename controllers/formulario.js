const Cliente = require('../models/Cliente')
const jwt = require('jsonwebtoken')

/* MANEJO DE ERRORES */
const manejoDeErrores = (err) => {
    console.log(err.message, err.code)
    let errors = {email:'', nombreCompleto:'', usuario:'', password:''}
    
    //Duplicacion emails
    if(err.code === 11000){
        errors.email = 'Ese email ya está registrado'
        return errors
    }

    //Validacion de errores
    if(err.message.includes('cliente validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{/* ESTO ES UN ARRAY */
            errors[properties.path] = properties.message
        })
    }
    return errors
}

const maxAge = 3*24*60*60
const createToken=(id, email, password) => {
    return jwt.sign({id, email, password},'myfoodie', /* .sign es un metodo que se utiliza para crear una firma en JSON */
    {expiresIn: maxAge })
}

/* METODO POST */
const signup_post = async (req, res) =>{
    const {email, nombreCompleto, usuario, password} = req.body
    
    try{
        const cliente = await Cliente.create({email, nombreCompleto, usuario, password})
        const token = createToken(cliente._id, cliente.email, cliente.password)
        res.cookie('nuevo_cliente',token,{maxAge: maxAge*1000})
        res.redirect('/auth/login')  
    }
    catch(err){
        const errors = manejoDeErrores(err)
        res.status(400).json({errors})
    }
}

const login_post = (req, res) =>{

}

/* METODO GET */
const signup_get = (req, res) =>{
    res.render('signup')
}

const login_get = (req, res) =>{
    res.render('login')
}

module.exports = { 
    signup_get, 
    login_get, 
    signup_post, 
    login_post
}