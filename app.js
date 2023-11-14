const express = require('express')
const app = express()
const formulario = require('./routes/formulario')
const home = require('./routes/home')
const shop = require('./routes/shop')
const carrito = require('./routes/carrito')
const producto = require('./routes/producto')
const compra = require('./routes/compra')
const connectDB = require('./db/conexion')
require('dotenv').config()
const cookieSession = require('cookie-session')
const passportGoogle= require('./config/config')
const passport = require('passport')
const bodyParser = require('body-parser');



/* PUERTO DEL SERVIDOR */
const puerto = process.env.PUERTO

// Configuración de plantilla EJS
app.set('view engine', 'ejs')

// ACCESO A LOS ARCHIVOS ESTATICOS 
app.use(express.static('public'))

/* COOKIE SESSION */
app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[process.env.COOKIE_KEY]
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
app.use('/producto', producto)
app.use('/compras', carrito)
app.use('/auth', formulario)
app.use('/comidas', shop)
app.use('/', compra)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/* Conexion a la base de datos */
const iniciar = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(puerto, console.log(`El servidor se inicio en http://localhost:${puerto}`))
    }catch(error){
        console.log('Error al conectar con la base de datos',error)
    }
}
iniciar()