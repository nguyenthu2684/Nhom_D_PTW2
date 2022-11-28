const dbConnection = require('../configs/db.config');

const Log = function (log) {
    this.userName = user.userName;
    this.passWord = user.passWord;

}

    Log.loginFun = function (result, data) {
        if (data.userName && data.passWord) {
            dbConnection.query('select * from login where `userName` = "' + data.userName + '" And `passWord` = "' + data.passWord + '";', function (err, res) {
                if (err) throw error;
                if (res.length > 0) {
                    
                    
                } else {
                    result(null, res);
                }

            });
        } else {
            console.log('Please enter Username and Password!');
            result(null);
        }
    }   

    Log.getAllLog = function (result) {
        dbConnection.query("select * from login", function (err, res) {
            if (err) {
                console.log("Error: ", err);
                result(null, err);
            } else {
                console.log("Log: hello", res);
                result(null, res);
            }
        });
    }



    module.exports = Log;
