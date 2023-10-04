const express = require("express");
const router = express.Router()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL:'auth/google/redirect'
    },()=>{

    })
)
passport.use(
    new FacebookStrategy({
        clientID: keys.facebook.clientID,
        clientSecret: keys.facebook.clientSecret,
        callbackURL:'auth/facebook/redirect'
    },()=>{

    })
)

const { signup_get, login_get, signup_post, login_post } = require('../controllers/formulario')

/* RUTAS */

router.route('/signup').get(signup_get)
router.route('/signup').post(signup_post)

router.route('/login').get(login_get)
router.route('/login').post(login_post)

router.get('/google', passport.authenticate('google',{
    scope:['profile']
}))
router.get('/facebook', passport.authenticate('facebook',{
    scope:['profile']
}))
module.exports = router