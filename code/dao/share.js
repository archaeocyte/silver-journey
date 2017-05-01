var connection = require("./connection");
var utils = require("../utils");

exports.getLanguage =  function getLanguage(callback) {
	var sql = `
		select * from language
	`;
	connection.query(sql, [], callback);
};