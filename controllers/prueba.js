/* ELIMINAR PRODUCTO DEL CARRITO */
const eliminarProductos = async (req, res) => {
    const { productoId } = req.params.id

    try {
        // Buscamos el producto en el carrito por ID
        const productoEnCarrito = await Carrito.findById(productoId)

        if (!productoEnCarrito) {
            return res.json({ mensaje: "Producto no encontrado en el carrito" })
        }

        // Buscamos el producto en nuestra DB por el nombre que está en el carrito
        const { nombre, imgUrl, precio, _id } = await Producto.findOne({ nombre: productoEnCarrito.nombre })

        // Eliminamos el producto del carrito
        await Carrito.findByIdAndDelete(productoId)

        // Actualizamos la propiedad en la DB de Productos
        await Producto.findByIdAndUpdate(
            _id,
            { enCarrito: false, nombre, imgUrl, precio },
            { new: false }
        )

        return res.json({ mensaje: `El producto ${nombre} fue eliminado` })
    } catch (error) {
        return res.json({ mensaje: "Hubo un error", error })
    }
}