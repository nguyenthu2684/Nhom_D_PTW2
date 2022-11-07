import userService from "../services/userService"

let handleLogin = async(req,res)=> {
    let email = req.body.email;
    let password = req.body.password;

    if(!email || !password){
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameters'
        })
    }

    let userData = await userService.handleUserLogin(email, password);
    console.log(userData);
    return res.status(200).json({
        errCode: userData.errCode,
        message:userData.errMessage,
        user: userData.user ? userData.user: {}
    })
}

// let handleLogout = async(req,res) => {
//     try {
//         req.user.tokens = req.user.tokens.filler((tokens)=>{

//         })
//         await req.user.save();
//         res.send();
//     }catch(e){
//         res.status(300).send(e);

//     }
// }

let handleGetAllUser = async(req, res)=> {
    let id = req.query.id;
    if(!id) {  
         return res.status(200).json({
             errCode: 1,
             errMessage: 'Khong thanh cong',
             users: []
         })

    }
    let users =await userService.getAllUsers(id);  
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users
    })
}

let handleCreateNewUser = async(req,res)=> {
    let message = await userService.createNewUser(req.body);
    console.log(message);
    return res.status(200).json(message);

}


let handleDeleteUser = async(req,res)=>{
    if(!req.body.id) {
        return res.status(200).json({
            errCode:1,
            errMessage: 'Missing require parameter'
        })
    }
    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message);

}

let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserDate(data);
    return res.status(200).json(message);
   
}

let getAllCode = async(req,res)=> {
    try {
        let data = await userService.getAllCodeService(req.query.type);
        return res.status(200).json(data);

    }catch(e) {
        console.log('get all code',e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

module.exports = {
    handleLogin:handleLogin,
    handleGetAllUser:handleGetAllUser,
    handleCreateNewUser:handleCreateNewUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
    getAllCode:getAllCode
    
}