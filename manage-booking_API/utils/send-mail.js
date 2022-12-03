const nodemailer = require("nodemailer");
const { encrypt } = require("./crypto");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

const sendMail = async (to) => {
    const mailEnc = encrypt(to);
    return await transporter.sendMail({
        from: process.env.NODEMAILER_EMAIL,
        to,
        subject: "Confirm reset password ✔", // Subject line
        html: `<a href='${process.env.FRONTEND_BASE_URL}?m=${JSON.stringify(mailEnc)}'>Plesase click here to confirm your email!</a>`, // html body
    });
}

const notiPassWasChanged  = async (to) => {
    const mailEnc = encrypt(to);
    return await transporter.sendMail({
        from: process.env.NODEMAILER_EMAIL,
        to,
        subject: "Your reset password success ✔", // Subject line
        html: `<b>Your reset password success ✔</b>`, // html body
    });
}

module.exports = {
    sendMail,
    notiPassWasChanged,
}