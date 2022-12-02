import axios from '../axios';


const handleLoginApi =(userEmail,userPassword)=> {
    return axios.post('/api/login', {email: userEmail,password:userPassword});
}

// const handgetAllUsers = (users)=> {
//     return axios.get('/api/specialist/getAll', {name:users});
// }

export {handleLoginApi}
