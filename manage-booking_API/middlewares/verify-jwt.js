const jwt = require('jsonwebtoken');
const Log = require('../models/login.models');

const verifyJWT = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) return res.sendStatus(401);

        const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY)

        const userByEmail = await Log.findOne_email(decoded?.userName);

        if (userByEmail && userByEmail?.auth === 0) {
            req.user = userByEmail;
            return next();
        } else {
            return res.status(401).json({success: false, message: "User not found"});
        }
    } catch (err) {
        return res.status(401).json({success: false, message: "Invalid token"});
    }
}

module.exports = verifyJWT;