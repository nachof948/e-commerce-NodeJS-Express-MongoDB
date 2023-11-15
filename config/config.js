const GoogleStrategy = require('passport-google-oauth20').Strategy
const GoogleCliente = require('../models/Cliente-Google')
const passport = require('passport');
require('dotenv').config()


/* SESION CON GOOGLE */
/* Para manetener iniciada la sesion */
passport.serializeUser((user, done)=>{ /* Recupera los datos del usuario de la base datos */
    done(null, user.id)
})
passport.deserializeUser((id, done)=>{
    GoogleCliente.findById(id).then((user)=>{
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
        // Opciones de estrategia de Google
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL:'https://foodied-restaurante.onrender.com/auth/google/redirect'
    }, async (accessToken, refreshToken, profile, done) => { 
        try {
            // Buscar un usuario registrado
            const dato = await GoogleCliente.findOne({ googleId: profile.id });
            
            if (dato) {
                done(null, dato)
            } else {
                // Registrar un nuevo usuario
                const user = await new GoogleCliente({
                    googleId: profile.id,
                    username: profile.displayName,
                    image:profile.photos[0].value
                }).save();/* Metodo para guardar informacion */
                
                done(null, user);
            }
        } catch (error) {
            done(error, null);
        }
    })
);

/* SESION CON FORMULARIO */
