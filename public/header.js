const header = document.getElementById('header');
const contenedorHeader = document.getElementsByClassName('contenedor-header');
const badge = document.getElementById('carrito');
const carrito = document.querySelector(".carrito-compras")




document.querySelectorAll('.tarjeta-producto').forEach(tarjeta => {
    tarjeta.addEventListener('click', function() {
      const productoId = this.dataset.productoId; // Obtener el ID del producto de la tarjeta clickeada
      window.location.href = '/producto/' + productoId; // Redirigir a la página del producto
    });
  });
badge.addEventListener('click', () =>{
    if(carrito.style.display==='flex'){
        carrito.style.display ='none'
    } else{
        carrito.style.display ='flex'
    }
}) 


window.addEventListener('scroll', () =>{
    if(window.scrollY > 1){
        header.style.backgroundColor = 'rgb(132,183,78)';
        header.style.padding= '0rem 0rem';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})
