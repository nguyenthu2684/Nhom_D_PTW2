const dbConnection = require("../configs/db.config");

const Prescription = function (prescription) {
  this.idCard  = prescription.idCard ;
  this.idDrug = prescription.idDrug;
  this.amount = prescription.amount;
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

Prescription.getByIdLK = function (result,userId) {
  dbConnection.query( 'SELECT * FROM prescription INNER JOIN drug ON prescription.idDrug = drug.idDrug INNER JOIN specialist_doctor ON prescription.idCard = specialist_doctor.idCard where prescription.idCard = '+ userId,function (err, res) {
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
  dbConnection.query('insert into `prescription`(`idCard`, `idDrug`, `amount`) value("'+ data.idCard +'","'+ data.idDrug +'","'+ data.amount +'")', function(err, res) {
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
