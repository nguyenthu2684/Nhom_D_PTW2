
import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) =>{
    try {
       
    let data = await db.User.findAll();
    return res.render('homepage.ejs', {
        data: JSON.stringify(data)
    });

    }catch(e){
        console.log(e);
    }
   
}

let getAbout = (req, res) =>{
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) =>{
    return res.render('crud.ejs');
}

let postCRUD = async(req, res) =>{
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('Post crud form serve');
}

let displayGetCRUD = async (req, res) =>{
    let data = await CRUDService.getAllUsers();
    console.log('-------------------------');
    console.log(data);
    console.log('-------------------------');

    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let geteEditCRUD = async(req,res)=> {
    let userId = req.query.id;
    if(userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        //Checck user data not found

        // let userData
        return res.render('editCRUD.ejs', {
            user: userData
        });

    }else {
        return res.send('User not found!');

    }
    console.log(req.query.id);
}

let putCRUD = async(req, res) =>{
    let data = req.body;
    let allUsers = await CRUDService.updateUserDate(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
    
}

let deleteCRUD =  async(req, res) => {
    let id = req.query.id;
    if(id){
        await CRUDService.deleteUserById(id)
        return res.send('Delete user successfully');
    }else {
        return res.send('user not found');

    }


}
module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    geteEditCRUD: geteEditCRUD,
    putCRUD:putCRUD,
    deleteCRUD: deleteCRUD

    
}