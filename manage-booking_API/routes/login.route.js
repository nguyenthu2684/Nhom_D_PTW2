
const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login.controller');

router.route('/logFun').post(loginController.loginFun);

router.post('/login', loginController.Login);

router.post('/send-mail', loginController.sendMail);

router.post('/reset-password', loginController.resetPassword);

module.exports = router;

