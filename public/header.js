const header = document.getElementById('header');
const contenedorHeader = document.getElementsByClassName('contenedor-header');

window.addEventListener('scroll', () =>{
    if(window.scrollY > 1){
        header.style.backgroundColor = 'rgb(132,183,78)';
        header.style.padding= '0rem 0rem';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})