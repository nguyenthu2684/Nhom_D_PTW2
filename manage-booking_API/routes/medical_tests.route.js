const express = require('express');

const router = express.Router();

const medicalTestsController = require('../controllers/medical_tests.controller');


//prescription
router.route('/getAll').get(medicalTestsController.getAll);
router.route('/:id').get(medicalTestsController.getById);
router.route('/addMedicalTests').post(medicalTestsController.addMedicalTests);
router.route('/delete/:id').delete(medicalTestsController.deleteMedicalTests);



module.exports = router;