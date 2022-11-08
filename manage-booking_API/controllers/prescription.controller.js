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
    
}
