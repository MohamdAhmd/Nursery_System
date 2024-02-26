const express = require('express');
const authController = require('../controllers/authCntroller')
const {dataValidation ,updateValidation, paramValidation} = require('../middelware/validation/teacherValidation')
const validator = require('../middelware/validation/validator')
const Router = express.Router();

Router.post('/login',authController.post_login)
Router.post('/signup',dataValidation,validator,authController.post_signup)
Router.post('/changePass',authController.change_Password)


module.exports = Router