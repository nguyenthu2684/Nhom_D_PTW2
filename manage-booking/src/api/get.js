
import axios from 'axios';

const url = {
    baseUrl: "https://62ff9a7d34344b6431fd456b.mockapi.io",
    users: "user"
}

const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json"
    }
})
const api = {
    url,
    instance,
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete
};
export default api;