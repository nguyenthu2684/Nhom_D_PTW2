const dbConnection = require("../configs/db.config");

const Prescription = function (prescription) {
  this.idCard  = prescription.idCard ;
  this.idDrug = prescription.idDrug;
};

Prescription.getAll = function (result) {
  dbConnection.query(
    'select * from prescription',function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
      } else {
        console.log("prescription: ", res);
        result(null, res);
      }
    }
  );
}

Prescription.getById = function (result,userId) {
  dbConnection.query(
    'select * from prescription where idCard = '+ userId,function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
      } else {
        console.log("prescription: ", res);
        result(null, res);
      }
    }
  );
}

Prescription.addPrescription = function(result, data) { 
  dbConnection.query('insert into `prescription`(`idCard`, `idDrug`) value("'+ data.idCard +'","'+ data.idDrug +'")', function(err, res) {
      if (err) {
          console.log("Error: ", err);
          result(null, err);
      } else {
          console.log("prescription: ", res);
          result(null, res);
      }
  });
}

Prescription.deletePrescription = function(result, idPr) { 
  dbConnection.query('delete from  `prescription` where `primaryKeyVirtual` = ' + idPr, function(err, res) {
      if (err) {
          console.log("Error: ", err);
          result(null, err);
      } else {
          console.log("prescription: ", res);
          result(null, res);
      }
  });
}

module.exports = Prescription;
