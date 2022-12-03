const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Log = require('../models/login.models');

const Login = require('../models/login.models');
const { decrypt } = require('../utils/crypto');
const { sendMail, notiPassWasChanged } = require('../utils/send-mail');

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

    },

    sendMail: async (req, res) => {
        try {
            const { userName } = req.body;

            // find user by email
            const userByEmail = await Login.findOne_email(userName);
          
        
            // check is user existing in database.
            if (userByEmail === null) {
                return res.status(401).json({ errorCode: 1, message: `Email not found!` });
            }

            const sent = await sendMail(userName);

            return res.status(200).json({
                email: userName,
                messeage: "Good"
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ success: false, message: "Error login" });
        }

    },

    resetPassword: async (req, res) => {
        try {
            const { mailEnc, passWord } = req.body;

            const email = decrypt(JSON.parse(mailEnc));
            // find user by email
            const userByEmail = await Login.findOne_email(email);
        
            // check is user existing in database.
            if (userByEmail === null) {
                return res.status(401).json({ errorCode: 1, message: `Email not found!` });
            }

            // update
            await Log.updatePasswordByUserName(email, passWord);

            await notiPassWasChanged(email);

            return res.status(200).json({
                email: email,
                messeage: "Good"
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ success: false, message: "Error login" });
        }

    }
}
