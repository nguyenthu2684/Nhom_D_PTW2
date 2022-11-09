const Login = require('../models/login.modules');

module.exports = {  
    signIn: (req, res) => {
        data = req.body;
        console.log(JSON.stringify(data));
        Login.signIn(function(err, login) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', login);
            res.send(login);
        }, data)
    },
   
    
}
