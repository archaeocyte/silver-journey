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

exports.getFilmByCinemaId = function getFilmByCinemaId(id, callback) {
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
