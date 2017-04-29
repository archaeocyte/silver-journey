var eventproxy = require("eventproxy");
var film_dao = require("../dao").film;
var error_code = require("./error_code");
var _ = require("lodash");
var async = require("async");

exports.list = function list(req, res, next) {
	var ep = new eventproxy();
	ep.fail(next);
	ep.all([
		"fetch_film_list",
		"fetch_actor_list",
		"fetch_director_list"
	], function(films, actors, directors) {

		var actor_map = {},
			director_map = {};
		_.forEach(actors, function(actor) {
			actor_map[actor.id] = actor;
		});
		_.forEach(directors, function(director) {
			director_map[director.id] = director;
		});

		var allTask = [];
		_.forEach(films, function(film) {
			allTask.push(function(task_callback) {
				ep.all([
					`${film.id}_get_film_actor`,
					`${film.id}_get_film_director`,
					`${film.id}_get_film_poster`,
					`${film.id}_get_film_still`
				], function(
					film_actors,
					film_directors,
					film_posters,
					film_stills
				) {

					film.actors = [];
					film.posters = [];
					film.stills = [];
					_.forEach(film_actors, function(item) {
						var actor = actor_map[item.actor_id];
						actor.role_name = item.role_name;
						film.actors.push(actor);
					});

					_.forEach(film_posters, function(item) {
						film.posters.push(item.url);
					});

					_.forEach(film_stills, function(item) {
						film.stills.push(item.url);
					});

					film.types = JSON.parse(film.type);
					delete film.type;

					film.director = director_map[film_directors[0].director_id];
					task_callback(null, film);
				});

				film_dao.getFilmActorById(film.id, ep.done(`${film.id}_get_film_actor`));
				film_dao.getFilmDirectorById(film.id, ep.done(`${film.id}_get_film_director`));
				film_dao.getFilmPosterById(film.id, ep.done(`${film.id}_get_film_poster`));
				film_dao.getFilmStillById(film.id, ep.done(`${film.id}_get_film_still`));
			});
		});
		async.parallelLimit(allTask, 10, function(err, films) {
			return res.send({
				code: error_code.SUCCESS,
				data: {
					films: films
				},
				msg: "SUCCESS"
			});
		});
	});
	film_dao.getAllFilm(ep.done("fetch_film_list"));
	film_dao.getActor(null, ep.done("fetch_actor_list"));
	film_dao.getDirector(null, ep.done("fetch_director_list"));
};