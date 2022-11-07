import axios from '../axios';


const handleLoginApi =(userEmail,userPassword)=> {
    return axios.post('/api/login', {email: userEmail,password:userPassword});
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`);
}

const getTopDoctorHomeServices = (limit) => {
    return axios.get(`/api/get-all-user?id=${limit}`)
}


const createNewUserService = (data)=> {
    console.log('check dat service', data);
    return axios.post('/api/create-new-user',data)
}

const deleteUserService = (userId)=> {
    // return axios.delete('/api/delete-user', {id:userId})
    return axios.delete('/api/delete-user',{
        data: {
            id:userId
        }
    })
}

const editUserService =(inputData)=> {
    return axios.put('/api/edit-user', inputData);
        

}


export {handleLoginApi,getAllUsers,getTopDoctorHomeServices,createNewUserService,deleteUserService,editUserService}
