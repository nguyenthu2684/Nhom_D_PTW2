const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    },


    Login: async (req, res) => {
        try {
            const { userName, passWord } = req.body;

            // find user by email
            const userByEmail = await Login.findOne_email(userName);
          
            console.log({
                userByEmail
            })
            // check is user existing in database.
            if (userByEmail === null) {
                return res.status(401).json({ errorCode: 1, message: `Please register before login!` });
            }

            // compare client password with from database
            // const match = bcrypt.compareSync(passWord, userByEmail['hash_password']);
            const match = passWord === userByEmail.passWord;
      
            // check is password compare success.
            if (match) {
                const payload = {
                    userName: userByEmail.useName,
                    auth: userByEmail.auth
                }

                const accessToken = jwt.sign(
                    payload,
                    process.env.SECRET_JWT_KEY
                );

                return res.json({ success: true, message: "Login successfully!", accessToken });
            } else {
                return res.status(401).json({ success: false, message: `Password incorrect` });
            }
        } catch (err) {
            console.log(err)
            return res.status(500).json({ success: false, message: "Error login" });
        }

    }
}
