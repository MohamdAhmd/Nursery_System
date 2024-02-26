const express = require('express');
const authController = require('../controllers/authCntroller')
const {validateLogin,validateSignup , changePassword} = require('../middelware/validation/authValidation')
const validator = require('../middelware/validation/validator')
const Router = express.Router();

Router.post('/login',validateLogin,validator,authController.post_login)
Router.post('/signup',validateSignup,validator,authController.post_signup)
Router.post('/changePass',changePassword,validator,authController.change_Password)


module.exports = Router