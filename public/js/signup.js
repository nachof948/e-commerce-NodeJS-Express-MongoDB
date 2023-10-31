const form = document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault(); /* Evita que se recargue el formulario */
    //Obtener los valores
const email = form.email.value /* Capturar el valor del input email */
const nombreCompleto = form.nombreCompleto.value /* Capturar el valor del input email */
const usuario = form.usuario.value /* Capturar el valor del input email */
const password = form.password.value /* Capturar el valor del input password */


try{ /* Capturo la informacion del usuario formulario de registro */
const res = await fetch('/auth/signup',{
    /* Agrego propiedades */
    method: 'POST',
    body: JSON.stringify({email, nombreCompleto, usuario, password}), /* Convierte de un objeto a un JSON es lo inverso a res.json() */
    headers:{'Content-Type':'application/json'}
})
}
catch(err){
    console.log(err)
}
})