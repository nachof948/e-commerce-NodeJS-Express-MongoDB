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


/* METODO POST */
const signup_post = async (req, res) =>{
    const {email, nombreCompleto, usuario, password} = req.body
    
    try{
        const cliente = await Cliente.create({email, nombreCompleto, usuario, password})
        res.redirect('/login')  
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