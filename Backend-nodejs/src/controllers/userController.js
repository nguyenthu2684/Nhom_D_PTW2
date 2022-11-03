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
    let id = req.body.id;
    if(!id) {  
         return res.status(200).json({
             errCode: 1,
             errCode: 'Khong thanh cong',
             users: []
         })

    }
    let users =await userService.getAllUsers(id);  
    return res.status(200).json({
        errCode: 0,
        errCode: 'OK',
        users
    })
}



module.exports = {
    handleLogin:handleLogin,
    handleGetAllUser:handleGetAllUser,
    
}