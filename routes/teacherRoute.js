const express = require('express');
const teachersController = require('../controllers/teacherController')
const {isAuth} = require('../middelware/protectRoutes')
const router = express.Router();

router.route('/teachers')
        .get(teachersController.getAllTeachers)
        .post(teachersController.addNewTeacher)
        .put(teachersController.updateTeacher)

router.route('/teachers/supervisors').get(teachersController.getAllSupervisors)
router.route('/teachers/:id')
        .get(teachersController.getTeacherByid)
        .delete(teachersController.deleteTeacher)

module.exports = router;