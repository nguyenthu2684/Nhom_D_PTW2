const Doctor = require('../models/doctor.model');

module.exports = {
    getAll: (req, res) => {
        Doctor.getAll(function(err, doctor) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', doctor);
            res.send(doctor);
        })
    },
    addDoctor: (req, res) => {
        data = req.body;
        console.log(JSON.stringify(data));
        Doctor.addDoctor(function(err, doctor) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', doctor);
            res.send(doctor);
        }, data)
    },

    deleteDoctorByID: (req, res) => {
        const doctorId = req.params.id;
        Doctor.deleteDoctorByID(function(err, doctor) {
            if (err) {
                console.log('Controller - Delete Doctor by id: ', err);
                res.send(err);
            }
            console.log('Res: ', doctor);
            res.send(doctor);
        }, doctorId)
    },
    
    updateDoctor: (req, res) => {
        data = req.body;
        const doctorId = req.params.id;
        console.log(JSON.stringify(data));
        Doctor.updateDoctor(function(err, doctor) {
            if (err) {
                res.send(err);
            }
            console.log('Res: ', doctor);
            res.send(doctor);
        }, data,doctorId)
    },

    
}
