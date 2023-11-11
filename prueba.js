const restarProductos = async (req, res) => {
    const nombre = req.body.nombre
    const imagen = req.body.imagen
    const precio = req.body.precio
    try {
        const productoEnCarrito = await Carrito.findOne({nombre});

        if (!productoEnCarrito) {
            const nuevoProductoCarrito = new Carrito({ nombre, imagen, precio, cantidad: 1 });
            await nuevoProductoCarrito.save();
        } else {
            if (productoEnCarrito.cantidad <= 0) {
                await Carrito.findByIdAndRemove(id);
            } else {
                await Carrito.findByIdAndUpdate(id, { cantidad: productoBuscado.cantidad });
            }
            productoEnCarrito.cantidad -= 1;
            await productoEnCarrito.save();
        }

        res.redirect('/compras');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
};