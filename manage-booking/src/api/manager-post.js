import axios from "axios";

const URL = "https://62ff9a7d34344b6431fd456b.mockapi.io/"

const getListPostService = () => axios.get(`${URL}/posts`)

const createPostService = (data) => axios.post(`${URL}/posts`, data)

const getDetailPostService = (id) => axios.get(`${URL}/posts/${id}`)

const editPostService = (payload) => axios.put(`${URL}/posts/${payload.id}`, payload)

const deletePostService = (id) => axios.delete(`${URL}/posts/${id}`)
export {
    getListPostService,
    createPostService,
    getDetailPostService,
    editPostService,
    deletePostService
}