import db from "../models/index";
import bcrypt from'bcryptjs';

const salt = bcrypt.genSaltSync(10);


let hashUserPassword = (password)=> {
    return new Promise(async(resolve,reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }catch(e) {
            reject(e);
        }

       

    })
}


let handleUserLogin = (email, password) => {
    return new Promise(async(resolve, reject) => {
        try {
            let userData = {};

            let isExit = await checkUserEmail(email)
            if(isExit) {
                //user already exists

                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: {email: email},
                    raw: true
                    
                });
                if(user) {
                    //so sánh password
                    let check = await bcrypt.compareSync(password, user.password);
                    if(check) {
                        userData.errCode = 0;
                        userData.errMessage = 'Success';
                        // Xoa thuoc tinh password
                        delete user.password;
                        
                        userData.user = user;
                    }else {
                        userData.errCode = 3;
                        userData.errMessage = 'Sai mật khẩu';
                    }

                    
                }else {
                    userData.errCode = 2;
                    userData.errMessage = `Không tìm thấy user`
                }
            
            }
            else{
                //return error
                userData.errCode = 1;
                userData.errMessage =`Email không tồn tại trong hệ thống. Vui lòng nhập email khác`
            }          
            resolve(userData)
        }catch(err){
            reject(err)
        }
    })
}


let checkUserEmail=(userEmail) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {email: userEmail}
            })
            if(user) {
                resolve(true)
            }else{
                resolve(false)
            }


        }catch (err) {
            reject(err)
        }
    })
} 

// let handleLogout = (email,password)=>{
//     return new Promise((resolve, reject) => {
//         try {
//             resolve()

//         }catch(e) {
//             reject(e)
//         }
//     })
// } 

let getAllUsers =(userId)=> {
    return new Promise(async(resolve, reject) => {
        try {
            let users = '';
            if(userId === 'ALL'){
                users = await db.User.findAll({
                    attributes: {
                        exclude:['password']
                    }
                })
            }if(userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: {id: userId},
                    attributes: {
                        exclude:['password']
                    }
                })
            }

            resolve(users)
        }catch(e){
            reject(e);

        }
    })
}

// let handleDoctor= (userId)=> {
//     return new Promise(async(resolve,reject)=>{
//         try {

//         }catch(e) {
//             reject(e)

//         }
//     });
// }

let createNewUser = (data)=> {
    return new Promise(async(resolve,reject)=>{
        try {
            //Check email is exist??
            let check = await checkUserEmail(data.email);
            if(check===true) {
                resolve({
                    errCode:1,
                    errMessage:'Email da dc su dung, vui long thu email khac'
                })
            }else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phonenumber: data.phonenumber,
                    gender: data.gender === '1' ? true : false,
                    roleId: data.roleId
                })
                resolve({
                    errCode: 0,
                    message:'OK'
                });
            }
        }catch(e){
            reject(e);
        }

        
    })
}

let deleteUser = (userId) =>{
    return new Promise(async(resolve, reject) =>{
        let foundUser = await db.User.findOne({
            where:{ id: userId }
        })
        if(!foundUser) {
            resolve({
                errCode: 2,
                errMessage: 'Nguoi dung ko ton tai'
            })
        }
       
            await db.User.destroy({
            where:{ id: userId }

            })

        resolve({
            errCode: 0,
            message: 'Nguoi dung da xoa'

        })

    })
}

let updateUserDate = (data) =>{
    return new Promise(async(resolve, reject) =>{
        try{
            if(!data.id) {
                resolve({
                    errCode:2,
                    errMessage: 'Missing'
                })
            }
            let user = await db.User.findOne({
                where: {id: data.id},
                raw: false
            })
            if(user){   
                 user.firstName =data.firstName;
                 user.lastName = data.lastName;
                 user.address= data.address;

                 await user.save();
                resolve({
                    errCode: 0,
                    message: 'update user thanh cong'
                })
            }else {
                resolve({
                    errCode:1,
                    errMessage:'User ko tim thay'
                });
            }
            
        }catch(e){
            reject(e);

        }
    })
}

let getAllCodeService = (typeInput)=> {
    return new Promise(async(resolve, reject)=>{
        try {
            if(!typeInput) {
                resolve({
                    errCode:1,
                    errMessage: 'Missing required parameter !'
                })

            }else {
                let res = {};
                let allcode = await db.ALLcode.findAll({
                    where: {type: typeInput}
                });
                res.errCode=0;
                res.data = allcode;
                resolve(res);
            }

        }catch(e) {
            reject(e)
        }
    })
}
module.exports = {
    handleUserLogin:handleUserLogin,
    getAllUsers:getAllUsers,
    createNewUser:createNewUser,
    deleteUser:deleteUser,
    updateUserDate:updateUserDate,
    getAllCodeService:getAllCodeService
}