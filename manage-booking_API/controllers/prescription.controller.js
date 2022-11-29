const Prescription = require('../models/prescription.model');

module.exports = {
    getAll: (req, res) => {
        Prescription.getAll(function(err, prescription) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', prescription);
            res.send(prescription);
        })
    },

    getById: (req, res) => {
        const userId = req.params.id;
        Prescription.getById(function(err, prescription) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', prescription);
            res.send(prescription);
        },userId)
    },

    getByIdLK: (req, res) => {
        const userId = req.params.id;
        Prescription.getByIdLK(function(err, prescription) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', prescription);
            res.send(prescription);
        },userId)
    },

    addPrescription: (req, res) => {
        data = req.body;
        console.log(JSON.stringify(data));
        Prescription.addPrescription(function(err, prescription) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', prescription);
            res.send(prescription);
        }, data)
    },  

    deletePrescription: (req, res) => {
        const prId = req.params.id;
        Prescription.deletePrescription(function(err, prescription) {
            if (err) {
                console.log('Controller - Delete Prescription by id: ', err);
                res.send(err);
            }
            console.log('Res: ', prescription);
            res.send(prescription);
        }, prId)
    },
    
}
