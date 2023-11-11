const express = require('express');
const passport = require('passport');
const router = express.Router()


const { signup_get, login_get, logout_get,signup_post, login_post, logoutCliente_get } = require('../controllers/formulario')

/* RUTAS */

router.route('/signup').get(signup_get)
router.route('/signup').post(signup_post)

router.route('/login').get(login_get)
router.route('/logout').get(logout_get)
router.route('/logoutCliente').get(logoutCliente_get)
router.route('/login').post(login_post)

router.get('/google', passport.authenticate('google',{
    scope:['profile']
}))
router.get('/google/redirect', passport.authenticate('google'), (req, res) =>{
    res.redirect('/comidas/all')
})

module.exports = router