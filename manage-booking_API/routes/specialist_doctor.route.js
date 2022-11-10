const express = require('express');

const router = express.Router();
const specialistDoctorController = require('../controllers/specialist_doctor.controller');


//doctor
router.route('/getAll').get(specialistDoctorController.getAll);
router.route('/:id').get(specialistDoctorController.getByIdCard);
router.route('/addSpecialistDoctor').post(specialistDoctorController.addSpecialistDoctor);
// router.route('/delete/:id').delete(specialistDoctorController.deleteSpecialistDoctorByIdCard);
// router.route('/update/:id').put(specialistDoctorController.updateSpecialistDoctor);

module.exports = router;