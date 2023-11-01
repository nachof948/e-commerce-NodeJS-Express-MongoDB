const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const Cliente = require('../models/Cliente')


passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    Cliente.findById(id,(error, user)=>{
        done(error, user)
    })
})


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done)=>{
    
    /* Comprobar si existe el email del usuario en la base de datos */
    const usuario = await Cliente.findOne({email})
    if(!usuario){
        return done(null, false, {message: 'No esta este usuario'})
    } else{
        /* Comprobar si existe el email del usuario en la base de datos */
        const contraseña = await usuario.matchPassword(password)
        if(contraseña){
            return done(null, usuario)
        }else{
            return done(null, false, {message: 'Contraseña incorrecta'})
        }
    }
}))
