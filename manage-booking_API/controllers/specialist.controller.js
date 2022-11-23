const Specialist = require('../models/specialist.model');

module.exports = {
    getAll: (req, res) => {
        Specialist.getAll(function(err, specialist) {
            console.log('controller - Get all specialist');
            if (err) {
                res.send(err);
            }
            console.log('Res: ', specialist);
            res.send(specialist);
        })
    },

    getSpecialistById: (req, res) => {
        const specialistId = req.params.id;
        Specialist.getSpecialistById(function(err, specialist) {
            if (err) {
                console.log('Controller - Get specialist by id: ', err);
                res.send(err);
            }
            console.log('Res: ', specialist);
            res.send(specialist);
        }, specialistId)
    },    
}
