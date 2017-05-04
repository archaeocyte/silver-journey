var connection = require("./connection");
var utils = require("../utils");

exports.getSessionLanguageById = function getSessionLanguageById(id, callback) {
	var sql = `
		select language.* from (
			select language_id from session_language
			where session_id = ${id}
		) s_l
		left join language on s_l.language_id = language.id
	`;
	connection.query(sql, [], callback);
};