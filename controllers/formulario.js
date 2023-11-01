const Cliente = require('../models/Cliente')
const jwt = require('jsonwebtoken')
const passport = require('passport')


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
const login_post = passport.authenticate('local',{
    failureRedirect: '/auth/login',
    successRedirect:'/',
})
    
/*     const { email, password } = req.body;

    try {
        const usuarioEncontrado = await Cliente.findOne({ email });

        if (!usuarioEncontrado) {
            return res.status(401).send('Usuario no encontrado');
        }

        // Si encontramos al usuario, pasamos la información a la vista y renderizamos la página
        res.render('home', { cliente: usuarioEncontrado }); // Aquí le pasamos el usuario a la vista
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
    } */


/* const login_post = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const usuarioEncontrado = await Cliente.findOne({ email });
    if(usuarioEncontrado){
        console.log("Usuario logeado", usuarioEncontrado)
    }
  
      if (!usuarioEncontrado) {
        return res.status(401).send('Usuario no encontrado');
      }

      return res.redirect('/');
    } catch (error) {
      console.error(error);
      return res.status(500).send('Error interno del servidor');
    }
};
   */


/* METODO GET */
const signup_get = (req, res) =>{
    res.render('signup')
}

const login_get = (req, res) =>{
    res.render('login', {user:req.user, cliente:req.user})
}
const logout_get = (req, res) =>{
    req.logOut()
    console.log('Usuario deslogeado')
    res.redirect('/')
}

module.exports = { 
    signup_get, 
    login_get, 
    signup_post, 
    login_post,
    logout_get
}