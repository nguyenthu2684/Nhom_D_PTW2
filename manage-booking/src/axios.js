import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});


instance.interceptors.response.use(
    (res)=>{
        return res.data;
    }
)


export default instance;
