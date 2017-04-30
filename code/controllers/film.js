var eventproxy = require("eventproxy");
var film_dao = require("../dao").film;
var error_code = require("./error_code");
var _ = require("lodash");
var async = require("async");

function fillFilmDetail(film, supply, callback) {
	var actor_map = supply.actor_map,
		director_map = supply.actor_map,
		language_map = supply.language_map,
		ep = supply.ep;

	ep.all([
		`${film.id}_get_film_actor`,
		`${film.id}_get_film_director`,
		`${film.id}_get_film_poster`,
		`${film.id}_get_film_still`,
		`${film.id}_get_film_language`
	], function(
		film_actors,
		film_directors,
		film_posters,
		film_stills,
		film_languages
	) {

		film.actors = [];
		film.posters = [];
		film.stills = [];
		film.languages = [];
		_.forEach(film_actors, function(item) {
			var actor = actor_map[item.actor_id];
			actor.role_name = item.role_name;
			film.actors.push(actor);
		});

		_.forEach(film_languages, function(item) {
			var language = language_map[item.language_id];
			film.languages.push(language);
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
		callback(null, film);
	});

	film_dao.getFilmActorById(film.id, ep.done(`${film.id}_get_film_actor`));
	film_dao.getFilmDirectorById(film.id, ep.done(`${film.id}_get_film_director`));
	film_dao.getFilmPosterById(film.id, ep.done(`${film.id}_get_film_poster`));
	film_dao.getFilmStillById(film.id, ep.done(`${film.id}_get_film_still`));
	film_dao.getFilmLanguageById(film.id, ep.done(`${film.id}_get_film_language`));

}

exports.list = function list(req, res, next) {
	var ep = new eventproxy();
	ep.fail(next);
	ep.all([
		"fetch_film",
		"fetch_actor_list",
		"fetch_director_list",
		"fetch_language_list"
	], function(
		film,
		actors,
		directors,
		languages
	) {

		var actor_map = {},
			director_map = {},
			language_map = {};
		_.forEach(actors, function(actor) {
			actor_map[actor.id] = actor;
		});
		_.forEach(directors, function(director) {
			director_map[director.id] = director;
		});
		_.forEach(languages, function(language) {
			language_map[language.id] = language;
		});

		var allTask = [];
		_.forEach(films, function(film) {
			allTask.push(function(task_callback) {
				fillFilmDetail(film, {
					actor_map: actor_map,
					director_map: director_map,
					language_map: language_map,
					ep: ep
				}, task_callback);
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
	film_dao.getFilm(null, ep.done("fetch_film_list"));
	film_dao.getActor(null, ep.done("fetch_actor_list"));
	film_dao.getDirector(null, ep.done("fetch_director_list"));
	film_dao.getLanguage(ep.done("fetch_language_list"));
};

exports.detail = function detail(req, res, next) {
	var ep = new eventproxy(),
		film_id = req.params.id;
	ep.fail(next);
	ep.all([
		"fetch_film",
		"fetch_actor_list",
		"fetch_director_list",
		"fetch_language_list"
	], function(
		films,
		actors,
		directors,
		languages
	) {

		var actor_map = {},
			director_map = {},
			language_map = {},
			film = films[0];
		if (!film) {
			return res.send({
				code: error_code.FILM_NOT_FOUND,
				data: {},
				msg: "FILM_NOT_FOUND"
			});
		}
		_.forEach(actors, function(actor) {
			actor_map[actor.id] = actor;
		});
		_.forEach(directors, function(director) {
			director_map[director.id] = director;
		});
		_.forEach(languages, function(language) {
			language_map[language.id] = language;
		});

		ep.on("fill_film", function(film) {
			return res.send({
				code: error_code.SUCCESS,
				data: {
					film: film
				},
				msg: "SUCCESS"
			});
		});

		fillFilmDetail(film, {
			actor_map: actor_map,
			director_map: director_map,
			language_map: language_map,
			ep: ep
		}, ep.done("fill_film"));

	});
	film_dao.getFilm(film_id, ep.done("fetch_film"));
	film_dao.getActor(null, ep.done("fetch_actor_list"));
	film_dao.getDirector(null, ep.done("fetch_director_list"));
	film_dao.getLanguage(ep.done("fetch_language_list"));
};
