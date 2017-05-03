var connection = require("./connection");
var utils = require("../utils");

exports.getFilm = function getFilm(id, callback) {
	var sql = `
		select * from film
	`;
	if (id || id == 0) {
		sql += ` where id = ${id}`;
	}
	connection.query(sql, [], callback);
};

exports.getFilmActorById = function getFilmActorById(id, callback) {
	var sql = `
		select actor.*, f_a.role_name, f_a.id as rlt_id from (
			select actor_id, role_name, id from film_actor
			where film_id = ${id}
		) f_a
		left join actor on actor.id = f_a.actor_id
	`;
	connection.query(sql, [], callback);
};

exports.getActor = function getActor(id, callback) {
	var sql = `
		select * from actor
	`;
	if (id || id == 0) {
		sql += ` where id = ${id}`;
	}
	connection.query(sql, [], callback);
};

exports.getFilmDirectorById = function getFilmDirectorById(id, callback) {
	var sql = `
		select director.*, f_d.id as rlt_id from (
			select director_id, id from film_director
			where film_id = ${id}
		) f_d
		left join director on director.id = f_d.director_id
	`;
	connection.query(sql, [], callback);
};

exports.getDirector = function getDirector(id, callback) {
	var sql = `
		select * from director
	`;
	if (id || id == 0) {
		sql += ` where id = ${id}`;
	}
	connection.query(sql, [], callback);
};

exports.getFilmPosterById = function getFilmPosterById(id, callback) {
	var sql = `
		select * from film_pic_poster
		where film_id = ${id}
	`;
	connection.query(sql, [], callback);
};

exports.getFilmStillById = function getFilmStillById(id, callback) {
	var sql = `
		select * from film_pic_still
		where film_id = ${id}
	`;
	connection.query(sql, [], callback);
};

exports.getFilmLanguageById = function getFilmLanguageById(id, callback) {
	var sql = `
		select language.* from (
			select language_id from film_language
			where film_id = ${id}
		) f_l
		left join language on f_l.language_id = language.id
	`;
	connection.query(sql, [], callback);
};

exports.getCommentById = function getCommentById(id, callback) {
	var sql = `
		select * from film_comment
		where film_id = ${id}
	`;
	connection.query(sql, [], callback);
};


