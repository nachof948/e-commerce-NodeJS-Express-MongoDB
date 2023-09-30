
/* METODO POST */

const signup_post = (req, res) =>{
    res.send('Usuario creado')
    const {email, nombreCompleto, usuario, password} = req.body
    console.log(email, nombreCompleto, usuario, password)
}

const login_post = (req, res) =>{

}

/* METODO GET */
const signup_get = (req, res) =>{
    res.render('signup')
}

const login_get = (req, res) =>{
    res.render('login')
}

module.exports = { 
    signup_get, 
    login_get, 
    signup_post, 
    login_post
}