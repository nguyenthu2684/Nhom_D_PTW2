const ExaminationCard = require('../models/examination_card.model');

module.exports = {
    getAll: (req, res) => {
        ExaminationCard.getAll(function(err, examinationCard) {
            console.log('controller - Get all examination card');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', examinationCard);
            res.send(examinationCard);
        })
    },

    getByIdCard: (req, res) => {
        const cardId = req.params.id;
        ExaminationCard.getByIdCard(function(err, examinationCard) {
            if (err) {
                console.log('Controller - Get examination card by idCard: ', err);
                res.send(err);
            }
            console.log('Res: ', examinationCard);
            res.send(examinationCard);
        }, cardId)
    },

    addExaminationCard: (req, res) => {
        data = req.body;
        console.log(JSON.stringify(data));
        ExaminationCard.addExaminationCard(function(err, examinationCard) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', examinationCard);
            res.send(examinationCard);
        }, data)
    },
   
    // updateUser: (req, res) => {
    //     data = req.body;
    //     const userId = req.params.id;
    //     console.log(JSON.stringify(data));
    //     User.updateUser(function(err, user) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         console.log('Res: ', user);
    //         res.send(user);
    //     }, data,userId)
    // },
    
    // deleteUserByID: (req, res) => {
    //     const userId = req.params.id;
    //     User.deleteUserByID(function(err, user) {
    //         if (err) {
    //             console.log('Controller - Delete user by id: ', err);
    //             res.send(err);
    //         }
    //         console.log('Res: ', user);
    //         res.send(user);
    //     }, userId)
    // },
    
}
