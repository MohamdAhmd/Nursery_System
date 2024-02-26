const express = require('express');
const {isAuth,isAdmin} = require('../middelware/protectRoutes')
const classController = require('../controllers/classController')
const {dataValidation,paramValidation,updateValidation} = require('../middelware/validation/classValidation')
const validator = require('../middelware/validation//validator')
const router = express.Router();

router.route('/class')
        .get(isAuth,isAdmin,classController.getAllClasses)
        .post(isAuth,isAdmin,dataValidation,validator,classController.addNewClass)
        .put(isAuth,isAdmin,updateValidation,validator,classController.updateClass)
        
        
router.route('/class/:id')
        .get(isAuth,isAdmin,paramValidation,validator,classController.getClassById)
        .delete(isAuth,isAdmin,paramValidation,validator,classController.deleteClass)
router.route('/class/child/:id').get(isAuth,isAdmin,paramValidation,validator,classController.getAllClassChildernById)
router.route('/class/teacher/:id').get(isAuth,isAdmin,paramValidation,validator,classController.getAllClassSupervisors)

module.exports = router;