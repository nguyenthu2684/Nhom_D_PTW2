import api from "./get";


const createUserService = (data) => api.post(api.url.users, data).then((res) => res.data)


const userService = {
   
    addUser: createUserService,
   
}
export default userService