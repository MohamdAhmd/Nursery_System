const express = require('express');
const childController = require('../controllers/childController');
const router = express.Router();

router.route('/child')
        .get(childController.getAllChildern)
        .post(childController.addNewChild)
        .put(childController.updatechild)
        .delete(childController.deleteChild)

router.route('/child/:id')
        .get(childController.getChildById)

module.exports = router;

