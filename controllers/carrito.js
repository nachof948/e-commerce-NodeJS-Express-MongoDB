const Carrito = require('../models/Carrito')
const Producto= require('../models/Producto')
const axios = require('axios')

/* AGREGAR PRODUCTOS AL CARRITO */

const agregarProductos = async (req, res) => {
    try {
        const { nombre, imagen, precio } = req.body;

        if (!nombre || !imagen || !precio) {
            return res.status(400).json({ mensaje: "Faltan campos obligatorios" });
        }

        const productoEnDb = await Producto.findOne({ nombre });

        if (!productoEnDb) {
            return res.status(400).json({ mensaje: "Este producto no se encuentra en la base de datos" });
        }

        const productoEnCarrito = await Carrito.findOne({ nombre });

        if (!productoEnCarrito) {
            const nuevoProductoCarrito = new Carrito({ nombre, imagen, precio, cantidad: 1 });
            await nuevoProductoCarrito.save();
        }

        await Producto.findByIdAndUpdate(productoEnDb._id,
            { enCarrito: true, nombre, imagen, precio },
            { new: true }
        );

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};



/* AGREGAR O ELIMINAR PRODUCTOS DEL CARRITO */
const modificarProductos = async (req, res) => {
    try{
    const { productoId } = req.params
    const { query }= req.query
    const body = req.body

    /* Buscamos el producto en el carrito*/
    const productoBuscado = await Carrito.findById(productoId)
    
    /* Si no hay query 'add'o 'del' */
    if(!query){
        res.status(400).json({mensaje: "Debes enviar un query"})
    
    /* Si el producto esta en el carrito y quiero agregar */
    } else if(productoBuscado && query === 'add'){
        body.cantidad = body.cantidad + 1
        await Carrito.findByIdAndUpdate(productoId, body, {
            new: true,
        }) .then((producto) =>{
            res.json({
                mensaje:`El producto: ${producto.nombre} fue actualizado`,
                producto
            })
        })
    } else if(productoBuscado && query === 'del'){
        body.cantidad = body.cantidad - 1
        await Carrito.findByIdAndUpdate(productoId, body, {
            new:true,
        }).then((producto) =>{
            res.json({mensaje: `El producto: ${producto.nombre} fue actualizado`,
            producto})
        })
    } else{
        res.status(400).json({mensaje: "Ocurrio un error"})
    }
    }
    catch(error) {
        res.status(500).json({ mensaje: "Error interno del servidor", error });
    }
}

/* ELIMINAR PRODUCTO DEL CARRITO */
const eliminarProductos = async(req, res) => {
    const { productoId } = req.params

    /* Buscamos el producto en el carrito */
    const productoEnCarrito = await Carrito.findById(productoId)

    /* Buscamos el producto en nuestra DB por el nombre del que esta en el carrito */
    const { nombre, imgUrl, precio, _id} = await Producto.findOne({nombre: productoEnCarrito.nombre})
    
    /* Buscamos y eliminamos el producto con la id */
    await Carrito.findByIdAndDelete(productoId)

    /* Actualizamos la propiedad en la DB de Productos */
    await Producto.findByIdAndUpdate(
        _id,
        { enCarrito: false, nombre, imgUrl, precio },
        {new: false}
    )
    .then((producto) =>{
        res.json({mensaje:`El producto ${producto.nombre} fue eliminado`})
    })
    .catch((error) => res.json({mensaje: "Hubo un error", error}))
}

module.exports ={
    agregarProductos,
    modificarProductos,
    eliminarProductos
}