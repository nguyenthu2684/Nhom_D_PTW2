const dbConnection = require('../configs/db.config');

const ExaminationCard = function(examinationCard) {
    this.idUser = examinationCard.idUser;
    this.dateCreate = new Date();
    this.dateMedicalExamination = new Date();
}

ExaminationCard.getAll = function(result) {
    dbConnection.query("select * from examination_card", function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("ExaminationCard: ", res);
            result(null, res);
        }
    });
}

ExaminationCard.getByIdCard = function(result, idCard) {
    dbConnection.query("select * from examination_card where idCard=" + idCard, function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("ExaminationCard: ", res);
            result(null, res);
        }
    });   
}

ExaminationCard.addExaminationCard = function(result, data) {  
    const d = new Date(Date.now());
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDay();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();
    const ymd = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    dbConnection.query('insert into `examination_card`(`idUser`, `dateCreate`, `dateMedicalExamination`) value("'+ data.idUser +'","'+ ymd + '","'+ data.dateMedicalExamination +'")', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("ExaminationCard: ", res);
            result(null, res);
        }
    });
}

// User.updateUser = function(result, data, userId) {  
// //     const d = new Date(Date.now());
// //   const year = d.getFullYear();
// //   const month = d.getMonth() + 1;
// //   const day = d.getDay();
// //   const hour = d.getHours();
// //   const minute = d.getMinutes();
// //   const second = d.getSeconds();
// //   const ymd = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

//     dbConnection.query('update `users` set `userName`= "'+ data.userName +'",`email`= "'+ data.email +'",`phone`= "'+ data.phone +'",`gender`= "'+ data.gender +'",`address`= "'+ data.address +'",`image`= "'+ data.image +'",`role`= "'+ data.role +'" WHERE `idUser`= "'+ userId +'"', function(err, res) {
//         if (err) {
//             console.log("Error: ", err);
//             result(null, err);
//         } else {
//             console.log("User: ", res);
//             result(null, res);
//         }
//     });
// }

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
module.exports = ExaminationCard;
