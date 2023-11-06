const Cliente = require('../models/Cliente')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Carrito = require('../models/Carrito')
const Productos = require('../models/Producto')


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
    const hashedPassword = await bcrypt.hash(password,10)
    try{
        const cliente = await Cliente.create({email, nombreCompleto, usuario, password: hashedPassword})
        const token = createToken(cliente._id, cliente.email, cliente.password)
        res.cookie('nuevo_cliente',token,{maxAge: maxAge*1000})
        res.render('login')  
    }
    catch(err){
        const errors = manejoDeErrores(err)
        res.status(400).json({errors})
    }
}

const login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const cliente = await Cliente.findOne({ email });
        if (!cliente) {
            res.render('login')
        }
        const validoPassword = await bcrypt.compare(password, cliente.password);
        if (!validoPassword) {
            res.render('login')
        }
        // Renderiza la plantilla y luego redirige a '/'
        res.redirect('/'); // <-- Añade esta línea
    } catch (error) {
        console.log(error);
    }
}



/* METODO GET */
const signup_get = (req, res) =>{
    res.render('signup')
}

const login_get = (req, res) =>{
    res.render('login')
}
const logout_get = (req, res) =>{
    req.logOut()
    res.redirect('/')
}
const logoutCliente_get = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error al destruir la sesión:", err);
        } else {
            res.redirect('/'); // Redirige a la página principal u otra página después del logout
        }
    });
};

module.exports = { 
    signup_get, 
    login_get, 
    signup_post, 
    login_post,
    logout_get,
    logoutCliente_get
}