const dbConnection = require('../configs/db.config');

const User = function(user) {
    this.userName = user.userName;
    this.fullName = user.fullName;
    this.email = user.email;
    this.phone = user.phone;
    this.birthday = new Date();
    this.gender = user.gender;
    this.address = user.address;
    this.imageUser = user.imageUser;
    this.role = user.role;
}

User.getAll = function(result) {
    dbConnection.query("select * from users", function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}

User.getUserById = function(result, userId) {
    dbConnection.query("select * from users where idUser=" + userId, function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });   
}

User.addUser = function(result, data) {  
    dbConnection.query('insert into `users`(`userName`, `fullName`, `email`, `phone`, `birthday`, `gender`, `address`, `imageUser`, `role`) value("'+ data.userName +'","'+ data.fullName + '","'+ data.email +'","'+ data.phone +'","'+ data.birthday +'","'+ data.gender +'","' + data.address +'","'+ data.imageUser +'","3")', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}

User.updateUser = function(result, data, userId) {  
//     const d = new Date(Date.now());
//   const year = d.getFullYear();
//   const month = d.getMonth() + 1;
//   const day = d.getDay();
//   const hour = d.getHours();
//   const minute = d.getMinutes();
//   const second = d.getSeconds();
//   const ymd = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

    dbConnection.query('update `users` set `userName`= "'+ data.userName +'",`email`= "'+ data.email +'",`phone`= "'+ data.phone +'",`gender`= "'+ data.gender +'",`address`= "'+ data.address +'",`imageUser`= "'+ data.imageUser +'",`role`= "'+ data.role +'" WHERE `idUser`= "'+ userId +'"', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}

User.deleteUserByID = function (result, userId) {
    dbConnection.query(
      'DELETE FROM `users` WHERE `idUser`=' + userId,
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

  User.getUserDoctorByIdSpe = function(result, idSpecia) {
    dbConnection.query("SELECT * FROM update_information_doctor INNER JOIN users ON users.idUser = update_information_doctor.idUser INNER JOIN specialist ON specialist.idSpecialist = update_information_doctor.idSpecialist where specialist.idSpecialist = " + idSpecia, function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });   
}
module.exports = User;
