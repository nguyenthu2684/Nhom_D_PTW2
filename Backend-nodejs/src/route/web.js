import express from 'express';
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    // Router from getHomePage at views
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAbout);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.geteEditCRUD);

    
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    
    //Viet API 
    router.post('/api/login',userController.handleLogin);
    // router.post('/api/logout', userController.handleLogout);





    

    // Retun ra view 
    router.get('/quangkhoa', (req, res) => {
        return res.send("Hello World with QK")
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;