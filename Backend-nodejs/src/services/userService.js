import db from "../models/index";
import bcrypt from'bcryptjs';


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

module.exports = {
    handleUserLogin:handleUserLogin,
    // handleLogout: handleLogout
    getAllUsers:getAllUsers
    


}