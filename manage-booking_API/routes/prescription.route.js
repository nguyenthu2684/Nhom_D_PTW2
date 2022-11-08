const express = require('express');

const router = express.Router();

const prescriptionController = require('../controllers/prescription.controller');


//prescription
router.route('/getAll').get(prescriptionController.getAll);
router.route('/addPrescription').post(prescriptionController.addPrescription);
// router.route('/update/:id').put(userController.updateUser);



module.exports = router;