import express from 'express';
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";

let router = express.Router();

let initWebRoutes = (app) => {
    // Router from getHomePage at views
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);

    //API Add Users
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    //API sửa user
    router.get('/edit-crud', homeController.geteEditCRUD);

    
    router.post('/put-crud', homeController.putCRUD);
    //API xóa user
    router.get('/delete-crud', homeController.deleteCRUD);
    
    //Viet API
    //API Login 
    router.post('/api/login',userController.handleLogin);

    //API cua Admin
    
    //API Get All Users
    router.get('/api/get-all-user', userController.handleGetAllUser);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);

    router.get('/allcode',userController.getAllCode);
    

    //API cua Doctor
    //API doctor home 
    router.post('/api/top-doctor-home', doctorController.getTopDoctorHome);
    








    

    return app.use("/", router);
}

module.exports = initWebRoutes;