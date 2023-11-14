
/* METODO GET */
const signup_get = (req, res) =>{
    res.render('signup')
}

const login_get = (req, res) =>{
    res.render('login')
}
const logout_get = (req, res) =>{
    req.logOut()
    res.redirect('/')
}

module.exports = { 
    signup_get, 
    login_get, 
    logout_get,
}