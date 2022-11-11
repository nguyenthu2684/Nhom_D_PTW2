const MedicalTests = require('../models/medical_tests.models');

module.exports = {
    getAll: (req, res) => {
        MedicalTests.getAll(function(err, medicalTests) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', medicalTests);
            res.send(medicalTests);
        })
    },

    getById: (req, res) => {
        const userId = req.params.id;
        MedicalTests.getById(function(err, medicalTests) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', medicalTests);
            res.send(medicalTests);
        },userId)
    },

    addMedicalTests: (req, res) => {
        data = req.body;
        console.log(JSON.stringify(data));
        MedicalTests.addMedicalTests(function(err, medicalTests) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', medicalTests);
            res.send(medicalTests);
        }, data)
    },  

    deleteMedicalTests: (req, res) => {
        const prId = req.params.id;
        MedicalTests.deleteMedicalTests(function(err, medicalTests) {
            if (err) {
                console.log('Controller - Delete MedicalTests by id: ', err);
                res.send(err);
            }
            console.log('Res: ', medicalTests);
            res.send(medicalTests);
        }, prId)
    },
    
}
