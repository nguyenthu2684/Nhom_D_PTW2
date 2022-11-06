const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');
const doctorController = require('../controllers/doctor.controller');


//doctor
router.route('/getAllDoctor').get(doctorController.getAll);
router.route('/addDoctor').post(doctorController.addDoctor);
router.route('/delete/:id').delete(doctorController.deleteDoctorByID);
router.route('/update/:id').put(doctorController.updateDoctor);

//users
router.route('/getAll').get(userController.getAll);
router.route('/:id').get(userController.getUserById);
router.route('/addUser').post(userController.addUser);
router.route('/update/:id').put(userController.updateUser);



module.exports = router;