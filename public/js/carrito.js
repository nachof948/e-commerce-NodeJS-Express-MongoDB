document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-product');
    const removeButtons = document.querySelectorAll('.remove-product');
  
    addButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        modificarProducto(productId, 'add');
      });
    });
  
    removeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        modificarProducto(productId, 'del');
      });
    });
  });
  async function modificarProducto(productId, query) {
    try {
      const response = await fetch(`/compras/modificar/${productId}?query=${query}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id: productId })
      });
  
      if (!response.ok) {
        throw new Error('Error al modificar el producto');
      }
  
      // Actualizar la interfaz de usuario sin recargar la página
      const producto = await response.json();
      const productoElement = document.querySelector(`[data-product-id="${productId}"]`);
      productoElement.querySelector('.cantidad').textContent = producto.cantidad;
    } catch (error) {
      console.error(error);
    }
  }