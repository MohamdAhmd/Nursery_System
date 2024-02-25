const express = require('express');
const authController = require('../controllers/authCntroller')
const Router = express.Router();

Router.post('/login',authController.post_login)
Router.post('/signup',authController.post_signup)


module.exports = Router