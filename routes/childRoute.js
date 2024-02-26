const express = require('express');
const childController = require('../controllers/childController');
const {dataValidation,updateValidation,paramValidation} = require('../middelware/validation/childValidation')
const validator = require('../middelware/validation/validator');
const {isAuth,isAdmin} = require('../middelware/protectRoutes');
const router = express.Router();

router.route('/child')
        .get(isAuth,isAdmin,childController.getAllChildern)
        .post(isAuth,isAdmin,dataValidation,validator,childController.addNewChild)
        .put(isAuth,isAdmin,updateValidation,validator,childController.updatechild)
        
router.route('/child/:id')
        .get(isAuth,isAdmin,paramValidation,validator,childController.getChildById)
        .delete(isAuth,isAdmin,childController.deleteChild)

module.exports = router;

