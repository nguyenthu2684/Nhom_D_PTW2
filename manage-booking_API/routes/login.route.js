const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login.controller');


router.route('/logFun').post(loginController.loginFun);
module.exports = router;