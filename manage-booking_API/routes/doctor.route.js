const express = require('express');

const router = express.Router();
const doctorController = require('../controllers/doctor.controller');


//doctor
router.route('/getAllDoctor').get(doctorController.getAll);
router.route('/addDoctor').post(doctorController.addDoctor);
router.route('/delete/:id').delete(doctorController.deleteDoctorByID);
router.route('/update/:id').put(doctorController.updateDoctor);

module.exports = router;