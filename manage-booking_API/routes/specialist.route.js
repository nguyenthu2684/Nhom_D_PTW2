const express = require('express');

const router = express.Router();

const specialistController = require('../controllers/specialist.controller');

router.route('/getAll').get(specialistController.getAll);
router.route('/:id').get(specialistController.getSpecialistById);

module.exports = router;