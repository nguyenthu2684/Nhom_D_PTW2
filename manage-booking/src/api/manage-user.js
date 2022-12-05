import api from "./get";

const getListUserService = () => api.get(api.url.users).then((res) => res.data)

const getDetailUserService = (id) => api.get(`${api.url.users}/${id}`).then((res) => res.data)

const createUserService = (data) => api.post(api.url.users, data).then((res) => res.data)

const editUserService = (id, data) => api.put(`${api.url.users}/${id}`, data).then((res) => res.data)

const deleteUserService = (id) => api.delete(`${api.url.users}/${id}`).then((res) => res.data)

const userService = {
    listUser: getListUserService,
    detailUser: getDetailUserService,
    addUser: createUserService,
    editUser: editUserService,
    deleteUser: deleteUserService
}

export default userService
// import axios from "axios";
// const URL = "https://62ff9a7d34344b6431fd456b.mockapi.io"

// const getListPostService = () => axios.get(`${URL}/user`)

// const createPostService = (data) => axios.post(`${URL}/user`, data)

// const getDetailPostService = (id) => axios.get(`${URL}/user/${id}`)

// const editPostService = (payload) => axios.put(`${URL}/user/${payload.id}`, payload)

// const deletePostService = (id) => axios.delete(`${URL}/user/${id}`)
// const URL = "http://localhost:5000/api/user"

// const getListPostService = () => axios.get(`${URL}/getAll`)

// const createPostService = (data) => axios.post(`${URL}/addUser`, data)


// const getDetailPostService = (id) => axios.get(`${URL}/${id}`)

// const editPostService = (payload) => axios.put(`${URL}/update/${payload.id}`, payload)

// const deletePostService = (id) => axios.delete(`${URL}/delete/${id}`)
// export {
//     getListPostService,
//     createPostService,
//     getDetailPostService,
//     editPostService,
//     deletePostService
// }