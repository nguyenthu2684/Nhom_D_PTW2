const dbConnection = require("../configs/db.config");

const SpecialistDoctor = function (specialistDoctor) {
  this.idCard = specialistDoctor.idCard;
  this.consulting = specialistDoctor.consulting;
  this.node = specialistDoctor.node;
};

SpecialistDoctor.getAll = function (result) {
  dbConnection.query("select * from specialist_doctor",
    function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
      } else {
        console.log("Specialist doctor: ", res);
        result(null, res);
      }
    }
  );
};

SpecialistDoctor.getByIdCard = function (result, idCard) {
  dbConnection.query("select * from specialist_doctor where   `idCard` = " + idCard ,
    function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
      } else {
        console.log("Specialist doctor: ", res);
        result(null, res);
      }
    }
  );
};

SpecialistDoctor.addSpecialistDoctor = function (result, data) {
  // const d = new Date(Date.now());
  // const year = d.getFullYear();
  // const month = d.getMonth() + 1;
  // const day = d.getDay();
  // const hour = d.getHours();
  // const minute = d.getMinutes();
  // const second = d.getSeconds();
  // const ymd = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

  dbConnection.query(
    'insert into `specialist_doctor`(`idCard`, `consulting`, `node`) value("' + data.idCard + '","' + data.consulting + '","' + data.node +'")',
    function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
      } else {
        console.log("Doctor: ", res);
        result(null, res);
      }
    }
  );
};

// SpecialistDoctor.deleteDoctorByID = function (result, doctorId) {
//   dbConnection.query(
//     "delete from doctor_clinic_specialty where id=" + doctorId,
//     function (err, res) {
//       if (err) {
//         console.log("Error: ", err);
//         result(null, err);
//       } else {
//         console.log("Doctor: ", res);
//         result(null, res);
//       }
//     }
//   );
// }

// SpecialistDoctor.updateDoctor = function(result, data, DoctorId) {  
//     const d = new Date(Date.now());
//   const year = d.getFullYear();
//   const month = d.getMonth() + 1;
//   const day = d.getDay();
//   const hour = d.getHours();
//   const minute = d.getMinutes();
//   const second = d.getSeconds();
//   const ymd = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

//     dbConnection.query('update `doctor_clinic_specialty` set `name`= "' + data.name + '",`birthday`= "' + data.birthday + '",`addres`= "' + data.addres + '",`phone`= "' + data.phone + '",`description`= "' + data.description + '",`clinicId`= "' + data.clinicId + '",`specialtyId`= "' + data.specialtyId + '",`updatedAt`= "'+ ymd +'" WHERE `id`= "'+ DoctorId +'"', function(err, res) {
//         if (err) {
//             console.log("Error: ", err);
//             result(null, err);
//         } else {
//             console.log("Doctor: ", res);
//             result(null, res);
//         }
//     });
// }

module.exports = SpecialistDoctor;
