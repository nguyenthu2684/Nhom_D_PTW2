const express = require('express');

const router = express.Router();

const prescriptionController = require('../controllers/prescription.controller');


//prescription
router.route('/getAll').get(prescriptionController.getAll);
router.route('/:id').get(prescriptionController.getById);
router.route('/addPrescription').post(prescriptionController.addPrescription);
router.route('/delete/:id').delete(prescriptionController.deletePrescription);



module.exports = router;