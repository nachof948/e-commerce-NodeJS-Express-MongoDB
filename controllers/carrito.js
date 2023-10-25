const Carrito = require('../models/Carrito')
const Producto= require('../models/Producto')

const mostrarCarrito= async(req, res) => { 
    try{
        const carrito = await Carrito.find({})
        res.render('carrito', {carrito:carrito, user:req.user})
    } catch(err){
        console.error(err);
        res.status(404).send('Error');
    }
}

/* AGREGAR PRODUCTOS AL CARRITO */
const agregarProductos = async (req, res) => {
    const nombre = req.body.nombre
    const imagen = req.body.imagen
    const precio = req.body.precio
    try {
        const productoEnCarrito = await Carrito.findOne({nombre});

        if (!productoEnCarrito) {
            const nuevoProductoCarrito = new Carrito({ nombre, imagen, precio, cantidad: 1 });
            await nuevoProductoCarrito.save();
        } else {
            // Si el producto ya está en el carrito, aumentar la cantidad en 1 (o como necesites)
            productoEnCarrito.cantidad += 1;
            await productoEnCarrito.save();
        }

        res.redirect('/compras');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};
/* AGREGAR O ELIMINAR PRODUCTOS DEL CARRITO */
const modificarProductos = async (req, res) => {
    try{
    const { id } = req.params
    const { query }= req.query
    const body = req.body

    /* Buscamos el producto en el carrito*/
    const productoBuscado = await Carrito.findById(id)
    
    /* Si el producto esta en el carrito y quiero agregar */
    if(productoBuscado && query === 'add'){
        body.cantidad = Number(body.cantidad) + 1
        await Carrito.findByIdAndUpdate(id, body, {
            new: true,
        }) .then((producto) =>{
            res.json({
                mensaje:`El producto: ${producto.nombre} fue actualizado`,
                producto
            })
        })
    } else if(productoBuscado && query === 'del'){
        body.cantidad = Number(body.cantidad) - 1
        await Carrito.findByIdAndUpdate(id, body, {
            new:true,
        }).then((producto) =>{
            res.json({mensaje: `El producto: ${producto.nombre} fue actualizado`,
            producto})
        })
    } else{
        res.status(400).json({mensaje: "Ocurrio un error"})
    }
    res.redirect('/compras')
    }
    catch(error) {
        res.status(500).json({ mensaje: "Error interno del servidor", error });
    }
}
/* ELIMINAR PRODUCTO DEL CARRITO */
const eliminarProductos = async (req, res) => {
    const id = req.params.id;
    try {
        await Carrito.findByIdAndRemove(id);
        res.redirect('/compras');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el producto del carrito');
    }
}

module.exports ={
    mostrarCarrito,
    agregarProductos,
    modificarProductos,
    eliminarProductos
}