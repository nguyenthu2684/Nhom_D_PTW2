const express = require('express');

const router = express.Router();

const updateInformationDoctorController = require('../controllers/update_information_doctor.controller');

router.route('/getAll').get(updateInformationDoctorController.getAll);
router.route('/:id').get(updateInformationDoctorController.getById);
router.route('/add').post(updateInformationDoctorController.addUpdateInformationDoctor);
router.route('/update/:id').put(updateInformationDoctorController.updateUpdateInformationDoctor);
// router.route('/delete/:id').delete(updateInformationDoctorController.deleteUserByID);

module.exports = router;