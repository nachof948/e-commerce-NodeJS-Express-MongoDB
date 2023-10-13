const express = require('express')
const app = express()
const formulario = require('./routes/formulario')
const home = require('./routes/home')
const shop = require('./routes/shop')
const keys = require('./config/keys')
const connectDB = require('./db/conexion')
require('dotenv').config()
const cookieSession = require('cookie-session')
const passportSetup= require('./config/config')
const passport = require('passport')

/* PUERTO DEL SERVIDOR */
const puerto = process.env.PUERTO

// Configuración de plantilla EJS
app.set('view engine', 'ejs')

// ACCESO A LOS ARCHIVOS ESTATICOS 
app.use(express.static('public'))


/* COOKIE SESSION */
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session({
    secret:'secreto',
    resave:false,
    saveUninitialized:true
}))


//Configuración del formulario
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// CONEXION A LAS RUTAS
app.use('/', home)
app.use('/auth', formulario)
app.use('/comidas', shop)




/* Conexion a la base de datos */
const iniciar = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(puerto, console.log(`El servidor se inicio en http://localhost:${puerto}`))
    }catch(error){
        console.log(error)
    }
}
iniciar()