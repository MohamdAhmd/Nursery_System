const express = require('express');
const adminController = require('../controllers/adminController')
const router = express.Router();

router.route('/admin')
        .post(adminController.addAdmin)

        router.route('/admin/teachers')
        .get(adminController.getAllTeachers)
        .post(adminController.addTeacher)
        .patch(adminController.updateTeacher)
        
router.route('/admin/teachers/:id').delete(adminController.deleteTeacherById)

router.route('/admin/children')
        .get(adminController.getAllChildren)
        .post(adminController.addChild)
        .patch(adminController.updateChild)
router.route('/admin/children/:id').delete(adminController.deleteChildById)

module.exports = router;

