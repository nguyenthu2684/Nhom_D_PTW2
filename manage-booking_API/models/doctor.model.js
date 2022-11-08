const dbConnection = require("../configs/db.config");

const Doctor = function (doctor) {
  this.name = doctor.name;
  this.birthday = new Date();
  this.addres = doctor.addres;
  this.phone = doctor.phone;
  this.description = doctor.description;
  this.clinicId = doctor.clinicId;
  this.specialtyId = doctor.specialtyId;
  this.createdAt = new Date();
  this.updatedAt = new Date();
};

Doctor.getAll = function (result) {
  dbConnection.query(
    "select * from doctor_clinic_specialty",
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
Doctor.addDoctor = function (result, data) {
  const d = new Date(Date.now());
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDay();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  const ymd = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

  dbConnection.query(
    'insert into `doctor_clinic_specialty`(`name`, `birthday`, `addres`, `phone`, `description`, `clinicId`, `specialtyId`, `createdAt`) value("' + data.name + '","' + data.birthday + '","' + data.addres + '","' + data.phone + '","' + data.description + '","' + data.clinicId + '","' + data.specialtyId + '","' + ymd + '")',
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

Doctor.deleteDoctorByID = function (result, doctorId) {
  dbConnection.query(
    "delete from doctor_clinic_specialty where id=" + doctorId,
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
}

Doctor.updateDoctor = function(result, data, DoctorId) {  
    const d = new Date(Date.now());
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDay();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  const ymd = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

    dbConnection.query('update `doctor_clinic_specialty` set `name`= "' + data.name + '",`birthday`= "' + data.birthday + '",`addres`= "' + data.addres + '",`phone`= "' + data.phone + '",`description`= "' + data.description + '",`clinicId`= "' + data.clinicId + '",`specialtyId`= "' + data.specialtyId + '",`updatedAt`= "'+ ymd +'" WHERE `id`= "'+ DoctorId +'"', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("Doctor: ", res);
            result(null, res);
        }
    });
}

module.exports = Doctor;
