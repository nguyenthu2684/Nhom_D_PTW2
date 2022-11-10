const dbConnection = require('../configs/db.config');

const Log = function(log) {
    this.idUser = log.idUser;
    this.pass = log.pass;
}



Log.signIn = function(result, data) {      
    dbConnection.query('insert into `login`(`idUser`, `pass`) value("'+ data.idUser +'","'+ data.pass  +'")', function(err, res) {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
        } else {
            console.log("User: ", res);
            result(null, res);
        }
    });
    
}
module.exports = Log;
