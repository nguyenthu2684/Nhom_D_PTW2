const dbConnection = require("../configs/db.config");

const MedicalTests = function (medicalTests) {
  this.idCard  = medicalTests.idCard ;
  this.idTest = medicalTests.idTest;
};

MedicalTests.getAll = function (result) {
  dbConnection.query(
    'select * from medical_tests',function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
      } else {
        console.log("medical_tests: ", res);
        result(null, res);
      }
    }
  );
}

MedicalTests.getById = function (result,userId) {
  dbConnection.query(
    'select * from medical_tests where idCard = '+ userId,function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
      } else {
        console.log("medical_tests: ", res);
        result(null, res);
      }
    }
  );
}

MedicalTests.addMedicalTests = function(result, data) { 
  dbConnection.query('insert into `medical_tests`(`idCard`, `idTest`) value("'+ data.idCard +'","'+ data.idTest +'")', function(err, res) {
      if (err) {
          console.log("Error: ", err);
          result(null, err);
      } else {
          console.log("medical_tests: ", res);
          result(null, res);
      }
  });
}

MedicalTests.deleteMedicalTests = function(result, idPr) { 
  dbConnection.query('delete from  `medical_tests` where `primaryKeyVirtual` = ' + idPr, function(err, res) {
      if (err) {
          console.log("Error: ", err);
          result(null, err);
      } else {
          console.log("medical_tests: ", res);
          result(null, res);
      }
  });
}

module.exports = MedicalTests;
