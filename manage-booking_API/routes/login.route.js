
const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login.controller');

router.route('/logFun').post(loginController.loginFun);

router.post('/login', loginController.Login);

module.exports = router;

