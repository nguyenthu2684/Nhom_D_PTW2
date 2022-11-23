const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');

router.route('/getAll').get(userController.getAll);
router.route('/:id').get(userController.getUserById);
router.route('/addUser').post(userController.addUser);
router.route('/update/:id').put(userController.updateUser);
router.route('/delete/:id').delete(userController.deleteUserByID);

module.exports = router;