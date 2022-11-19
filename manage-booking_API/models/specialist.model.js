const dbConnection = require('../configs/db.config');

const Specialist = function(specialist) {
    this.name = specialist.name;
    this.describe = specialist.describe;
    this.image = specialist.image;
}

Specialist.getAll = function(result) {
    dbConnection.query("select * from specialist", function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("specialist: ", res);
            result(null, res);
        }
    });
}

Specialist.getSpecialistById = function(result, specialistId) {
    dbConnection.query("select * from specialist where idSpecialist =" + specialistId, function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("specialist: ", res);
            result(null, res);
        }
    });   
}

module.exports = Specialist;
