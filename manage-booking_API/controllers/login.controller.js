
const Login = require('../models/login.models');

module.exports = {
    loginFun: (req, res) => {
        const data = req.body;
        Login.loginFun((results) => {
           if (!results) {
            return res.json({
                errCode: 1,
                message: "Sai tài khoản hoặc mật khẩu"
            });
           } 

           return res.json({
            message: "Logged In",
            user: results,
           });
        }, data)
    }
}
