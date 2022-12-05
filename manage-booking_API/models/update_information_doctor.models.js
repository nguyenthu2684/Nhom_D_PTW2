const dbConnection = require('../configs/db.config');

const UpdateInformationDoctor = function(updateInformationDoctor) {
    this.idUser  = updateInformationDoctor.idUser ;
    this.idSpecialist = updateInformationDoctor.idSpecialist;
    this.describeDoc = updateInformationDoctor.describeDoc;
}

UpdateInformationDoctor.getAll = function(result) {
    dbConnection.query("CALL Get_information_doctor", function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}

UpdateInformationDoctor.getById = function(result, userId) {
    dbConnection.query("select * from update_information_doctor where idUser=" + userId, function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("UpdateInformationDoctor: ", res);
            result(null, res);
        }
    });   
}

UpdateInformationDoctor.addUpdateInformationDoctor = function(result, data) {  
    dbConnection.query('insert into `update_information_doctor`(`idUser`, `idSpecialist`, `describeDoc`) value('+ data.idUser +','+ data.idSpecialist + ',"'+ data.describeDoc +'")', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("addUpdateInformationDoctor: ", res);
            result(null, res);
        }
    });
}

UpdateInformationDoctor.updateUpdateInformationDoctor = function(result, data, userId) {  
    dbConnection.query('update `update_information_doctor` set `idSpecialist`= "'+ data.idSpecialist +'",`describeDoc`= "'+ data.describeDoc +'" WHERE `idUser` = '+ userId, function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}

// User.deleteUserByID = function (result, userId) {
//     dbConnection.query(
//       "delete from users where idUser=" + userId,
//       function (err, res) {
//         if (err) {
//           console.log("Error: ", err);
//           result(null, err);
//         } else {
//           console.log("Doctor: ", res);
//           result(null, res);
//         }
//       }
//     );
//   }
module.exports = UpdateInformationDoctor;
