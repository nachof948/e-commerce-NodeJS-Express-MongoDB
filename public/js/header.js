const header = document.getElementById('header');
const contenedorHeader = document.getElementsByClassName('contenedor-header');
const buttonResponsive = document.getElementById("menuResponsive");
const menuResponsive = document.querySelector('.contenedor-menu-responsive');
const btnSesion = document.querySelector('.perfil')
const cerrarSesion = document.querySelector('.cerrar-sesion');
const enlacesMenu = document.querySelectorAll('.contenedor-menu-responsive a');

/* HACER CLICK EN UNA TARJETA Y QUE MUESTRE LOS DETALLES DEL PRODUCTO */
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

/* MENU RESPONSIVE */
buttonResponsive.addEventListener('click',()=>{
    menuResponsive.classList.toggle('activo')
})
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuResponsive.classList.remove('activo');
    });
});

/* MODIFICAR UN ESTILO DEL HEADER */
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
/* BOTON CERRAR */
btnSesion.addEventListener('click',()=>{
    if (cerrarSesion.style.display === 'block') {
        cerrarSesion.style.display = 'none';
    } else {
        cerrarSesion.style.display = 'block';
    }
})

