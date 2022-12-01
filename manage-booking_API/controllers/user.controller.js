const User = require('../models/user.model');

module.exports = {
    getAll: (req, res) => {
        User.getAll(function(err, user) {
            console.log('controller - Get all user');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', user);
            res.send(user);
        })
    },

    getUserById: (req, res) => {
        const userId = req.params.id;
        User.getUserById(function(err, user) {
            if (err) {
                console.log('Controller - Get user by id: ', err);
                res.send(err);
            }
            console.log('Res: ', user);
            res.send(user);
        }, userId)
    },

    getUserItrById: (req, res) => {
        const userId = req.params.id;
        User.getUserItrById(function(err, user) {
            if (err) {
                console.log('Controller - Get user by id: ', err);
                res.send(err);
            }
            console.log('Res: ', user);
            res.send(user);
        }, userId)
    },

    addUser: (req, res) => {
        console.log(111)
        data = req.body;
        console.log(JSON.stringify(data));
        User.addUser(function(err, user) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', user);
            res.send(user);
        }, data)
    },
   
    updateUser: (req, res) => {
        data = req.body;
        const userId = req.params.id;
        console.log(JSON.stringify(data));
        User.updateUser(function(err, user) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', user);
            res.send(user);
        }, data,userId)
    },
    
    deleteUserByID: (req, res) => {
        const userId = req.params.id;
        User.deleteUserByID(function(err, user) {
            if (err) {
                console.log('Controller - Delete user by id: ', err);
                res.send(err);
            }
            console.log('Res: ', user);
            res.send(user);
        }, userId)
    },
    getUserDoctorByIdSpe: (req, res) => {
        const idSpe = req.params.id;
        User.getUserDoctorByIdSpe(function(err, user) {
            if (err) {
                console.log('Create doctor ', err);
                res.send(err);
            }
            console.log('Res: ', user);
            res.send(user);
        },idSpe)
    },
}
