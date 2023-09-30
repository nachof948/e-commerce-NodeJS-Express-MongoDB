/* Esto se realiza para pullear el JSON a la base de datos */
/* Conexion al paquete dotenv */
require('dotenv').config()

/* Conexion a la base de datos */
const connectDB=require('./db/conexion')

/* Conexion al modelo */
const Cliente = require('./models/Cliente')

/* Lista de productos en JSON */
/* const jsonComidas = require('./comidas.json') */

/* Conexion a la base de datos */
const iniciar=async ()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany()/* Dejar en blanco toda la informacion */
        await Product.create(jsonProduct) /* Se crea en la base de datos el JSON */
        console.log('SE EFECTUO EL CAMBIO')
    }catch(error){
        console.log(error)
    }
}
/* iniciar() */