// const Login = require('../models/login.models');

// module.exports = {  
//     signIn: (req, res) => {
//         data = req.body;
//         console.log(JSON.stringify(data));
//         Login.signIn(function(err, login) {
//             if (err) {
//                 res.send(err);
//             }
//             console.log('Res: ', login);
//             res.send(login);
//         }, data)
//     },
   
    
// }
const Login = require('../models/login.models');

module.exports = {
    loginFun: (req, res) => {
        const data = req.body;
        Login.loginFun((results) => {
           if (!results) {
            return res.json({
                errCode: 1,
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
