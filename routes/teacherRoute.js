const express = require('express');
const teachersController = require('../controllers/teacherController')
const {isAuth,isAdmin} = require('../middelware/protectRoutes')
const {dataValidation ,updateValidation, paramValidation} = require('../middelware/validation/teacherValidation')
const validator = require('../middelware/validation/validator')
const { addImage } = require('../middelware/addImage')
const router = express.Router();

router.route('/teachers')
        .get(isAuth,isAdmin,teachersController.getAllTeachers)
        .post(isAuth,isAdmin,dataValidation,validator,addImage,teachersController.addNewTeacher)
        .put(updateValidation,validator,teachersController.updateTeacher)

router.route('/teachers/supervisors').get(isAuth,isAdmin,teachersController.getAllSupervisors)
router.route('/teachers/:id')
        .get(paramValidation,validator,teachersController.getTeacherByid)
        .delete(isAuth,isAdmin,paramValidation,validator,teachersController.deleteTeacher)

module.exports = router;