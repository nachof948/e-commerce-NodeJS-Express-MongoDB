const header = document.getElementById('header');
const contenedorHeader = document.getElementsByClassName('contenedor-header');
const buttonResponsive = document.getElementById("menuResponsive");
const menuResponsive = document.querySelector('.contenedor-menu-responsive');
const btnSesion = document.querySelector('.perfil')
const cerrarSesion = document.querySelector('.cerrar-sesion');


buttonResponsive.addEventListener('click',()=>{
    menuResponsive.classList.toggle('activo')
})

document.querySelectorAll('.tarjeta-producto').forEach(tarjeta => {
    tarjeta.addEventListener('click', function() {
      const productoId = this.dataset.productoId; // Obtener el ID del producto de la tarjeta clickeada
        if(productoId){
            window.location.href = '/producto/' + productoId; // Redirigir a la página del producto
        } else{
            window.location.href = '/auth/signup'
        }
    });
  });

window.addEventListener('scroll', () => {
    if (window.innerWidth > 1024) {
        if (window.scrollY > 1) {
            header.style.backgroundColor = 'rgb(132,183,78)';
            header.style.padding = '0rem 0rem';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    }
})
btnSesion.addEventListener('click',()=>{
    if (cerrarSesion.style.display === 'block') {
        cerrarSesion.style.display = 'none';
    } else {
        cerrarSesion.style.display = 'block';
    }
})

