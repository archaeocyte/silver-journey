var connection = require("./connection");
var utils = require("../utils");

module.exports = {
	getAllFilm: function(callback) {
		var sql = `
			select * from film
		`;
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
			where id = ${id}
		`;
		if (id || id == 0) {
			sql += ` where id = ${id}`;
		}
		connection.query(sql, [], callback);
	}
};

