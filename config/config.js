const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./keys');
const GoogleCliente = require('../models/Cliente-Google')


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
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL:'/auth/google/redirect'
    }, async (accessToken, refreshToken, profile, done) => { 
        try {
            // Buscar un usuario registrado
            const dato = await GoogleCliente.findOne({ googleId: profile.id });
            
            if (dato) {
                console.log('El usuario ya está registrado', dato);
                done(null, dato)
            } else {
                // Registrar un nuevo usuario
                const user = await new GoogleCliente({
                    googleId: profile.id,
                    username: profile.displayName,
                    image:profile.photos[0].value
                }).save();/* Metodo para guardar informacion */
                
                console.log('El usuario se creó con éxito', user); /* .then() es lo qe nos devuelve la base datos */
                done(null, user);
            }
        } catch (error) {
            console.error('Error:', error);
            done(error, null);
        }
    })
);

/* passport.use(
    new FacebookStrategy({
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        callbackURL:'/auth/facebook/redirect'
    }, async (accesToken, refreshToken, profile, cd)=>{
        const user = await FacebookCliente.findOne({ 
            accountId:profile.id,
            provider:'facebook'
        })
         if(!user){
            const user = new FacebookCliente({
                accountId:profile.id,
                name: profile.displayName,
                provider: profile.provider
            });
            await user.save()
            return cd(null, profile)
         }
        else{
            
            console.log('Usuario ya registrado')
            return cd(null, profile)
        }
    })
)
 */
