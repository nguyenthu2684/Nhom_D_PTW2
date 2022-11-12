const express = require('express');

const router = express.Router();

const logController = require('../controllers/login.controller');

router.route('/sign').post(logController.signIn);

module.exports = router;