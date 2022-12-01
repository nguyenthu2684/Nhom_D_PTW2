import axios from 'axios';

const BASE_URL = 'http://localhost:5000';


const handleLoginApi = (userName, passWord) => {
    return axios.post(BASE_URL + '/api/log/logFun', { userName, passWord });
}

export { handleLoginApi }
