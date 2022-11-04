const User = require('../models/user.model');

module.exports = {
    getAll: (req, res) => {
        User.getAll(function(err, user) {
            console.log('controller');
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
    addUser: (req, res) => {
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
    
}
