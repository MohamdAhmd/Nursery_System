const express = require('express');
const teachersController = require('../controllers/teacherController')
const classController = require('../controllers/classController')
const router = express.Router();

router.route('/class')
        .get(classController.getAllClasses)
        .post(classController.addNewClass)
        .put(classController.updateClass)
        
        
router.route('/class/:id')
        .get(classController.getClassById)
        .delete(classController.deleteClass)
router.route('/class/child/:id').get(classController.getAllClassChildernById)
router.route('/class/teacher/:id').get(classController.getAllClassSupervisors)

module.exports = router;