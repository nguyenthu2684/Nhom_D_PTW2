import axios from 'axios';

const BASE_URL = 'http://localhost:5000';


const handleLoginApi = (userName, passWord) => {
    return axios.post(BASE_URL + '/api/log/logFun', { userName, passWord });
}

const handleCheckEmail = (userName) => {
    return axios.post(BASE_URL + '/api/log/send-mail', { userName });
}

const handleResetPassword = (mailEnc, passWord) => {
    return axios.post(BASE_URL + '/api/log/reset-password', {
        mailEnc, passWord
    });

}

export { handleLoginApi, handleCheckEmail, handleResetPassword }
