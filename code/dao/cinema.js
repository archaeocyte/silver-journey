var connection = require("./connection");
var utils = require("../utils");

exports.getCinema = function getCinema(id, callback) {
	var sql = `
			select * from cinema
		`;
	if (id || id == 0) {
		sql += ` where id = ${id}`;
	}
	connection.query(sql, [], callback);
};


exports.getCommentById = function getCommentById(id, callback) {
	var sql = `
		select * from cinema_comment
		where cinema_id = ${id}
	`;
	connection.query(sql, [], callback);
};


