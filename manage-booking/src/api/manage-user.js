import request from "../util/request";
import axios from "axios";

const URL = "http://localhost:5000/api/user";

//Đổ danh sách lên màn hình
export const getAllAccountService = (payload) => {
    return request(`${URL}/getAll`, {
        method: "POST",
        data: payload,
    });
};

//Thêm user
export const createAccountService = (payload) => {
    return request(`${URL}/addUser`, {
        method: "POST",
        data: payload,
    });
};

//Sửa user
export const upDateAccountService = (id, payload) => {
    return request(`${URL}/update/${id}`, {
        method: "POST",
        data: payload,
    });
};

//Xóa user
export const deleteAccountService = (id) => {
    return request(`${URL}/delete/${id}`, {
        method: "POST",
    });
};

//Lấy thông tin 1 user
export const getDetailAccount = (id) => {
    return request(`${URL}/${id}`, {
        method: "POST",
    });
};