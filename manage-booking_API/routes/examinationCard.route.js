const express = require('express');

const router = express.Router();

const examinationCardController = require('../controllers/examination_card.controller');

router.route('/getAll').get(examinationCardController.getAll);
router.route('/:id').get(examinationCardController.getByIdCard);
router.route('/addExaminationCard').post(examinationCardController.addExaminationCard);
// router.route('/update/:id').put(examinationCardController.updateUser);
// router.route('/delete/:id').delete(examinationCardController.deleteUserByID);

module.exports = router;