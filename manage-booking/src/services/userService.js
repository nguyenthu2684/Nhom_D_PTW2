import axios from '../axios';


const handleLoginApi = (userName, passWord) => {
    return axios.post('/api/log/logFun', { userName, passWord });
}

export { handleLoginApi }
