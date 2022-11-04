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
    dbConnection.query('insert into `users`(`email`, `password`, `createdAt`) value("'+ data.email +'","'+ data.password +'","'+ data.createdAt + '")', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}
User.updateUser = function(result, data) {        
    dbConnection.query('insert into `users`(`email`, `password`, `createdAt`) value("'+ data.email +'","'+ data.password +'","'+ data.createdAt + '")', function(err, res) {
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
