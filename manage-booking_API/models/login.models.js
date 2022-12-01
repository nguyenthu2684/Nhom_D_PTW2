
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



Log.findOne_email = async function (userName) {
    const rows = await dbConnection.load(`SELECT *
    FROM login
    WHERE userName = '${userName}'`);

    console.log({
        rows
    })
    if (rows.length === 0) {
        return null
    }
    return rows[0];
}

module.exports = Log;
