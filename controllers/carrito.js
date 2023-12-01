const Carrito = require('../models/Carrito')
const Producto= require('../models/Producto')

const mostrarCarrito= async(req, res) => { 
    try{
        if(req.user){
            const carritoUsuario = await Carrito.find({usuario: req.user._id})
            /* Si el usuario tiene elementos en su carrito, se muestra la "notificacion" */
            if(carritoUsuario && carritoUsuario.length > 0){
                res.render('carrito',{carrito:carritoUsuario, user:req.user})
            }
            /* Si el usuario no tiene elementos dentro del carrito, no se muestra la "notificacion" */
            else{
                res.render('carrito', {carrito:[], user:req.user})
            }
            /* Si el usuario no esta logueado, no se muestra la "notificacion" */
        } else{
            res.render('carrito',{carrito:[], user:null})
        }
    } catch(err){
        res.status(404).send('error: ' + err);
    }
}

/* AGREGAR PRODUCTOS AL CARRITO */
const agregarProductos = async (req, res) => {
    const nombre = req.body.nombre
    const imagen = req.body.imagen
    const precio = req.body.precio
    try {
        /* Accedemos al ID del usuario */
        const usuarioId = req.user._id 
        
        /* Buscamos el carrito del usuario */
        let carritoUsuario = await Carrito.findOne({usuario: usuarioId})
        
        /* Si el usuario no tiene un carrito, creamos uno nuevo para el mismo */
        if(!carritoUsuario){
            carritoUsuario = new Carrito({usuario: usuarioId, items:[]})
        }
        
        /* Verificamos si el producto ya esta en el carrito */
        const productoEncontrado = carritoUsuario.items.find(item => item.nombre === nombre)
        
        /* Si el producto fue encontrado, aumentamos la cantidad a 1 */
        if(productoEncontrado){
            productoEncontrado.cantidad += 1
        }else{
            /* Si el producto no fue encontrado, el mismo se agrega al carrito */
            carritoUsuario.items.push({nombre, imagen, cantidad:1, precio})
        }
        /* Guardamos el carrito actualizado */
        await carritoUsuario.save()
        res.redirect('/compras');

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor", error: error.message });
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
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};





/* ELIMINAR PRODUCTO DEL CARRITO */
const eliminarProductos = async (req, res) => {
    const idProducto = req.params.id;
    const usuarioId = req.user._id;

    try {
        const carritoUsuario = await Carrito.findOneAndUpdate(
            { usuario: usuarioId },
            { $pull: { items: { _id: idProducto } } },
            { new: true }
        );

        if (carritoUsuario) {
            // Verificar si el carrito está vacío
            if (carritoUsuario.items.length === 0) {
                // Si el carrito está vacío, eliminar el documento completo del carrito
                await Carrito.findOneAndRemove({ usuario: usuarioId });
                res.redirect('/compras');
            } else {
                // Si el carrito no está vacío, redirigir a la página de compras
                res.redirect('/compras');
            }
        } else {
            res.status(404).send('No se encontró el carrito del usuario');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el producto del carrito');
    }
};






module.exports ={
    mostrarCarrito,
    agregarProductos,
    restarProductos,
    eliminarProductos,

}