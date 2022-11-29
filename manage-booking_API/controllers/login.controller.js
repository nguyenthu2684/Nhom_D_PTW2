const Login = require('../models/login.models');

module.exports = {
    loginFun: (req, res) => {
        const data = req.body;
        Login.loginFun((results) => {
           if (!results) {
            return res.json({
                message: "Can't Login"
            });
           } 

           return res.json({
            message: "Logged In",
            data: results,
           });
        }, data)
    }
}
