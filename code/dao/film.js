var connection = require("./connection");
var utils = require("../utils");

module.exports = {
	getFilm: function(id, callback) {
		var sql = `
			select * from film
		`;
		if (id || id == 0) {
			sql += ` where id = ${id}`;
		}
		connection.query(sql, [], callback);
	},
	getFilmActorById: function(id, callback) {
		var sql = `
			select * from film_actor
			where film_id = ${id}
		`;
		connection.query(sql, [], callback);
	},
	getActor: function(id, callback) {
		var sql = `
			select * from actor
		`;
		if (id || id == 0) {
			sql += ` where id = ${id}`;
		}
		connection.query(sql, [], callback);
	},
	getFilmDirectorById: function(id, callback) {
		var sql = `
			select * from film_director
			where film_id = ${id}
		`;
		connection.query(sql, [], callback);
	},
	getDirector: function(id, callback) {
		var sql = `
			select * from director
		`;
		if (id || id == 0) {
			sql += ` where id = ${id}`;
		}
		connection.query(sql, [], callback);
	},
	getFilmPosterById: function(id, callback) {
		var sql = `
			select * from film_pic_poster
			where film_id = ${id}
		`;
		connection.query(sql, [], callback);
	},
	getFilmStillById: function(id, callback) {
		var sql = `
			select * from film_pic_still
			where film_id = ${id}
		`;
		connection.query(sql, [], callback);
	},
	getLanguage: function(callback) {
		var sql = `
			select * from language
		`;
		connection.query(sql, [], callback);
	},
	getFilmLanguageById: function(id, callback) {
		var sql = `
			select * from film_language
			where film_id = ${id}
		`;
		connection.query(sql, [], callback);
	}
};

