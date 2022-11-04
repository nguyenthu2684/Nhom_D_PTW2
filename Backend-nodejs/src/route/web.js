import express from 'express';
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

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
    //API Get All Users
    router.get('/api/get-all-user', userController.handleGetAllUser);
    //API 
    // router.post('/api/doctor', userController.handleDoctor);
    








    

    // Retun ra view 
    router.get('/quangkhoa', (req, res) => {
        return res.send("Hello World with QK")
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;