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

exports.getSession = function getSession(id, callback) {
	var sql = `
		select session.*, cinema_film_rlt.film_id, cinema_film_rlt.cinema_id
		from session
		left join cinema_film_rlt on cinema_film_rlt.id = session.cinema_film_rlt_id
	`;
	if (id || id == 0) {
		sql += ` where session.id = ${id}`;
	}
	connection.query(sql, [], callback);
}
