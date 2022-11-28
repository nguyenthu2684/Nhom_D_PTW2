const Login = require('../models/login.models');

module.exports = {
    loginFun: (req, res) => {
        data = req.body;
        console.log(JSON.stringify(data));
        Login.loginFun(function(err, login) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', login);
            res.send(login);
        }, data)
    }
    
}
