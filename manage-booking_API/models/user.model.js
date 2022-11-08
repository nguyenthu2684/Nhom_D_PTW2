const dbConnection = require('../configs/db.config');

const User = function(user) {
    this.email = user.email;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.address = user.address;
    this.gender = user.gender;
    this.roleId = user.roleId;
    this.phonenumber = user.phonenumber;
    this.positionId = user.positionId;
    this.image = user.image;
    this.createdAt = new Date();
    this.updatedAt = new Date();
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
    dbConnection.query("select * from users where id=" + userId, function(err, res) {
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
    const d = new Date(Date.now()); 
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDay();
    const ymd = year+"/"+month+"/"+day;

    dbConnection.query('insert into `users`(`email`, `password`, `firstName`, `lastName`, `address`, `gender`, `roleId`, `phonenumber`, `positionId`, `image`, `createdAt`) value("'+ data.email +'","'+ data.password + '","'+ data.firstName +'","'+ data.lastName +'","'+ data.address +'","'+ data.gender +'","3","'+ data.phonenumber +'","'+ data.positionId +'","'+ data.image +'","'+ ymd + '")', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}

User.addUserByAdmin = function(result, data) {  
    const d = new Date(Date.now());
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDay();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  const ymd = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

    dbConnection.query('insert into `users`(`email`, `password`, `firstName`, `lastName`, `address`, `gender`, `roleId`, `phonenumber`, `positionId`, `image`, `createdAt`) value("'+ data.email +'","'+ data.password + '","'+ data.firstName +'","'+ data.lastName +'","'+ data.address +'","'+ data.gender +'","2","'+ data.phonenumber +'","'+ data.positionId +'","'+ data.image +'","'+ ymd + '")', function(err, res) {
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
    const d = new Date(Date.now());
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDay();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  const ymd = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;

    dbConnection.query('update `users` set `email`= "'+ data.email +'",`password`= "'+ data.password +'",`firstName`= "'+ data.firstName +'",`lastName`= "'+ data.lastName +'",`address`= "'+ data.address +'",`gender`= "'+ data.gender +'",`roleId`= "'+ data.roleId +'",`phonenumber`= "'+ data.phonenumber +'",`positionId`= "'+ data.positionId +'",`image`= "'+ data.image +'",`updatedAt`= "'+ ymd +'" WHERE `id`= "'+ userId +'"', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res,ymd);
            result(null, res);
        }
    });
}

User.deleteUserByID = function (result, userId) {
    dbConnection.query(
      "delete from users where id=" + userId,
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
module.exports = User;
