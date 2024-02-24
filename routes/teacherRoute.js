const express = require('express');
const teachersController = require('../controllers/teacherController')
const router = express.Router();

router.route('/teachers')
        .get(teachersController.getAllTeachers)
        .post(teachersController.addNewTeacher)
        .put(teachersController.updateTeacher)
        .delete(teachersController.deleteTeacher)
        

router.route('/teachers/supervisors').get(teachersController.getAllSupervisors)
router.route('/teachers/:id').get(teachersController.getTeacherByid)

module.exports = router;