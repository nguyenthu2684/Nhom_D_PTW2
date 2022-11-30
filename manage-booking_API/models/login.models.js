// const dbConnection = require('../configs/db.config');

// const Log = function(log) {
//     this.idUser = log.idUser;
//     this.pass = log.pass;
// }



// Log.signIn = function(result, data) {      
//     dbConnection.query('insert into `login`(`idUser`, `pass`) value("'+ data.idUser +'","'+ data.pass  +'")', function(err, res) {
//         if (err) {
//             console.log("Error: ", err);
//             result(null, err);
//         } else {
//             console.log("User: ", res);
//             result(null, res);
//         }
//     });
    
// }
// module.exports = Log;
const dbConnection = require('../configs/db.config');

const Log = function (log) {
    this.userName = user.userName;
    this.passWord = user.passWord;

}

Log.loginFun = function (callback, data) {
    if (data.userName && data.passWord) {
        dbConnection.query('select userName, auth from login where `userName` = "' + data.userName + '" And `passWord` = "' + data.passWord + '";', function (error, results, fields) {
            if (error) throw error;
            if (results.length === 0) return callback(null);
            return callback(results[0]);
        });
    } else {
        return callback(null);
    }
}


module.exports = Log;
