const express = require("express");
const router = express.Router()

const { signup_get, login_get, signup_post, login_post } = require('../controllers/formulario')

/* RUTAS */

router.route('/signup').get(signup_get)
router.route('/signup').post(signup_post)

router.route('/login').get(login_get)
router.route('/login').post(login_post)
module.exports = router