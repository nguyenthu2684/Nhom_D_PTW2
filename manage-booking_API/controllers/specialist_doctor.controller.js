const SpecialistDoctor = require('../models/specialist_doctor.model');

module.exports = {
    getAll: (req, res) => {
        SpecialistDoctor.getAll(function(err, specialistDoctor) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', specialistDoctor);
            res.send(specialistDoctor);
        })
    },

    getByIdCard: (req, res) => {
        SpecialistDoctor.getAll(function(err, specialistDoctor) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', specialistDoctor);
            res.send(specialistDoctor);
        })
    },

    addSpecialistDoctor: (req, res) => {
        data = req.body;
        console.log(JSON.stringify(data));
        SpecialistDoctor.addSpecialistDoctor(function(err, specialistDoctor) {
            console.log('controller');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', specialistDoctor);
            res.send(specialistDoctor);
        }, data)
    },

    // deleteSpecialistDoctorByIdCard: (req, res) => {
    //     const idCard = req.params.id;
    //     SpecialistDoctor.deleteDoctorByID(function(err, specialistDoctor) {
    //         if (err) {
    //             console.log('Controller - Delete SpecialistDoctor by idCard: ', err);
    //             res.send(err);
    //         }
    //         console.log('Res: ', specialistDoctor);
    //         res.send(specialistDoctor);
    //     }, idCard)
    // },
    
    // updateSpecialistDoctor: (req, res) => {
    //     data = req.body;
    //     const idCard = req.params.id;
    //     console.log(JSON.stringify(data));
    //     SpecialistDoctor.updateDoctor(function(err, specialistDoctor) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         console.log('Res: ', specialistDoctor);
    //         res.send(specialistDoctor);
    //     }, data,idCard)
    // },

    
}
