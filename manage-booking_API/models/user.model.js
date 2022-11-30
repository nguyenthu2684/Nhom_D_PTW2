const dbConnection = require('../configs/db.config');

const User = function (user) {
    this.userName = user.userName;
    this.fullName = user.fullName;
    this.email = user.email;
    this.phone = user.phone;
    this.birthday = new Date();
    this.gender = user.gender;
    this.address = user.address;
    this.image = user.image;
    this.role = user.role;
}

User.getAll = function (result) {
    dbConnection.query("select * from users", function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}

User.getUserById = function (result, userId) {
    dbConnection.query("select * from users where id=" + userId, function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}

User.addUser = function (result, data) {
    dbConnection.query('insert into `users`(`userName`, `fullName`, `email`, `phone`, `birthday`, `gender`, `address`, `image`, `role`) value("' + data.userName + '","' + data.fullName + '","' + data.email + '","' + data.phone + '","' + data.birthday + '","' + data.gender + '","' + data.address + '","' + data.image + '","3")', function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
}

User.updateUser = function (result, data, userId) {

    dbConnection.query('update `users` set `userName`= "' + data.userName + '",`email`= "' + data.email + '",`phone`= "' + data.phone + '",`gender`= "' + data.gender + '",`address`= "' + data.address + '",`image`= "' + data.image + '",`role`= "' + data.role + '" WHERE `id`= "' + userId + '"', function (err, res) {
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
        'DELETE FROM `users` WHERE `id`=' + userId,
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

User.getUserDoctorByIdSpe = function (result, idSpecia) {
    dbConnection.query("SELECT * FROM update_information_doctor INNER JOIN users ON users.id = update_information_doctor.id INNER JOIN specialist ON specialist.idSpecialist = update_information_doctor.idSpecialist where specialist.idSpecialist = " + idSpecia, function (err, res) {
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
