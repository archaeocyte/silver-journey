var connection = require("./connection");
var utils = require("../utils");

exports.getLanguage = function getLanguage(callback) {
	var sql = `
		select * from language
	`;
	connection.query(sql, [], callback);
};

exports.getCinemaByFilmId = function getCinemaByFilmId(id, callback) {
	var sql = `
		select * from (
			select cinema_id
			from cinema_film_rlt
			where film_id = ${id}
		) c_f_r
		left join cinema on c_f_r.cinema_id = cinema.id
	`;
	connection.query(sql, [], callback);
};

exports.getFilmByCinema = function getFilmByCinemaId(id, callback) {
	var sql = `
		select * from (
			select film_id
			from cinema_film_rlt
			where cinema_id = ${id}
		) c_f_r
		left join film on c_f_r.film_id = film.id
	`;
	connection.query(sql, [], callback);
};

exports.getSessionByFilmAndCinema = function getSessionByFilmAndCinema(options, callback) {
	var whereStr = utils.getSqlWhereArr(options).join(" AND ");
	var sql = `
		select session.*, c_f_r.film_id, c_f_r.cinema_id from (
			select *
			from cinema_film_rlt
			where ${whereStr}
		) c_f_r
		left join session on c_f_r.id = session.cinema_film_rlt_id
	`;
	connection.query(sql, [], callback);
}

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
