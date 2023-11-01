const form = document.querySelector('form');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const email = form.email.value;
    const nombreCompleto = form.nombreCompleto.value;
    const usuario = form.usuario.value;
    const password = form.password.value;

    try {
        const res = await fetch('/auth/signup', {
            method: 'POST',
            body: JSON.stringify({email, nombreCompleto, usuario, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if (res.ok) {
            // Registration successful, redirect to /login
            window.location.href = '/auth/login';
        } else {
            // Handle any potential errors here
            console.error('Error registering user');
        }
    } catch (err) {
        console.error(err);
    }
});
