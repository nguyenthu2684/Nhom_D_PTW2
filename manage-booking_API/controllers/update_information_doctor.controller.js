const UpdateInformationDoctor = require('../models/update_information_doctor.modules');

module.exports = {
    getAll: (req, res) => {
        UpdateInformationDoctor.getAll(function(err, updateInformationDoctor) {
            console.log('controller - Get all UpdateInformationDoctor');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', updateInformationDoctor);
            res.send(updateInformationDoctor);
        })
    },

    getById: (req, res) => {
        const userId = req.params.id;
        UpdateInformationDoctor.getById(function(err, updateInformationDoctor) {
            if (err) {
                console.log('Controller - Get user by id: ', err);
                res.send(err);
            }
            console.log('Res: ', updateInformationDoctor);
            res.send(updateInformationDoctor);
        }, userId)
    },

    addUpdateInformationDoctor: (req, res) => {
        data = req.body;
        console.log(JSON.stringify(data));
        UpdateInformationDoctor.addUpdateInformationDoctor(function(err, updateInformationDoctor) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', updateInformationDoctor);
            res.send(updateInformationDoctor);
        }, data)
    },
   
    updateUpdateInformationDoctor: (req, res) => {
        data = req.body;
        const userId = req.params.id;
        console.log(JSON.stringify(data));
        UpdateInformationDoctor.updateUpdateInformationDoctor(function(err, updateInformationDoctor) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', updateInformationDoctor);
            res.send(updateInformationDoctor);
        }, data,userId)
    },
    
    // deleteUserByID: (req, res) => {
    //     const userId = req.params.id;
    //     UpdateInformationDoctor.deleteUserByID(function(err, user) {
    //         if (err) {
    //             console.log('Controller - Delete user by id: ', err);
    //             res.send(err);
    //         }
    //         console.log('Res: ', user);
    //         res.send(user);
    //     }, userId)
    // },
    
}
