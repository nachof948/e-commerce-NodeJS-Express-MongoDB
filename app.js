const express = require('express')
const app = express()
const formulario = require('./routes/formulario')
const home = require('./routes/home')
const connectDB = require('./db/conexion')
const cookieParser = require('cookie-parser')
require('dotenv').config()


/* PUERTO DEL SERVIDOR */
const puerto = process.env.PUERTO

// ACCESO A LOS ARCHIVOS ESTATICOS 
app.use(express.static('public'))
//Configuración del formulario
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// CONEXION A LAS RUTAS
app.use('/auth', formulario)
app.use('/', home)
/* PARA UTILIZAR COOKIE PARSER*/
app.use(cookieParser())


// Configuración de plantilla EJS
app.set('view engine', 'ejs')


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