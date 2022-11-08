const dbConnection = require("../configs/db.config");

const Prescription = function (prescription) {
  this.idCard  = prescription.idCard ;
  this.idDrug = prescription.idDrug;
  this.node = prescription.node;
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
Prescription.addPrescription = function(result, data) { 
  dbConnection.query('insert into `prescription`(`idCard`, `idDrug`, `node`) value("'+ data.idCard +'","'+ data.idDrug +'","'+ data.node +'")', function(err, res) {
      if (err) {
          console.log("Error: ", err);
          result(null, err);
      } else {
          console.log("User: ", res);
          result(null, res);
      }
  });
}

module.exports = Prescription;
