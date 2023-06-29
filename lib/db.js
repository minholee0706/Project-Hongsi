var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Krs1064826!',
    database: 'user'
});
db.connect();

module.exports = db;