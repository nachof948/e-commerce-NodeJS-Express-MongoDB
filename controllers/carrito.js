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
const restarProductos = async (req, res) => {
    const nombre = req.body.nombre;

    try {
        const productoEnCarrito = await Carrito.findOne({ nombre });

        if (productoEnCarrito) {
            if (productoEnCarrito.cantidad < 2) {
                // Usar findByIdAndRemove en lugar de findOneAndDelete
                await Carrito.findByIdAndRemove(productoEnCarrito._id);
            } else {
                // Usar productoEnCarrito._id en lugar de id
                await Carrito.findByIdAndUpdate(productoEnCarrito._id, { cantidad: productoEnCarrito.cantidad - 1 });
                productoEnCarrito.cantidad -= 1;
                await productoEnCarrito.save();
            }
        }

        // Redirigir después de la operación de base de datos
        res.redirect('/compras');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};



/* AGREGAR O ELIMINAR PRODUCTOS DEL CARRITO */


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

const comprarProductos = async (req, res) => {
    try {
        const comprar = await Carrito.deleteMany({});
        console.log('Operación de eliminación exitosa:', comprar);
        res.render('compra')
    } catch (error) {
        console.error('Error al eliminar documentos de la colección Carrito:', error);
        // Puedes manejar el error de alguna manera, como renderizando una página de error.
    }
}

module.exports ={
    mostrarCarrito,
    agregarProductos,
    restarProductos,
    eliminarProductos,
    comprarProductos
}