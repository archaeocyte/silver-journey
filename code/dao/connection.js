var wuaotian;
try {
	wuaotian = require("../wuaotian.json");
} catch(e) {

}


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: wuaotian.mysql.wuaotian.host,
    user: wuaotian.mysql.wuaotian.user,
    password: wuaotian.mysql.wuaotian.password,
    database: wuaotian.mysql.wuaotian.database
});
connection.connect();
connection.query('SELECT create_time from user;', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', +rows[0].create_time);
});

module.exports = connection;