var eventproxy = require("eventproxy");
var film_dao = require("../dao").film;
var share_dao = require("../dao").share;
var error_code = require("./error_code");
var _ = require("lodash");
var async = require("async");

function fillFilmDetail(film, supply, callback) {
	var ep = supply.ep;

	ep.all([
		`${film.id}_get_film_actor`,
		`${film.id}_get_film_director`,
		`${film.id}_get_film_poster`,
		`${film.id}_get_film_still`,
		`${film.id}_get_film_language`,
		`${film.id}_get_film_comment`
	], function(
		film_actors,
		film_directors,
		film_posters,
		film_stills,
		film_languages,
		film_comments
	) {

		film.actors = [];
		film.posters = [];
		film.stills = [];
		film.languages = [];
		
		film.actors = film_actors;

		film.languages = film_languages;

		_.forEach(film_posters, function(item) {
			film.posters.push(item.url);
		});

		_.forEach(film_stills, function(item) {
			film.stills.push(item.url);
		});

		film.comments = film_comments;

		film.types = JSON.parse(film.type);
		delete film.type;

		film.director = film_directors[0];
		callback(null, film);
	});

	film_dao.getFilmActorById(film.id, ep.done(`${film.id}_get_film_actor`));
	film_dao.getFilmDirectorById(film.id, ep.done(`${film.id}_get_film_director`));
	film_dao.getFilmPosterById(film.id, ep.done(`${film.id}_get_film_poster`));
	film_dao.getFilmStillById(film.id, ep.done(`${film.id}_get_film_still`));
	film_dao.getFilmLanguageById(film.id, ep.done(`${film.id}_get_film_language`));
	film_dao.getCommentById(film.id, ep.done(`${film.id}_get_film_comment`));

}

exports.list = function list(req, res, next) {
	var ep = new eventproxy();
	ep.fail(next);
	ep.all([
		"fetch_film_list"
	], function(
		films
	) {

		var allTask = [];
		_.forEach(films, function(film) {
			allTask.push(function(task_callback) {
				fillFilmDetail(film, {
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
};

exports.detail = function detail(req, res, next) {
	var ep = new eventproxy(),
		film_id = req.params.id;
	ep.fail(next);
	ep.all([
		"fetch_film"
	], function(
		films
	) {

		var film = films[0];
		if (!film) {
			return res.send({
				code: error_code.FILM_NOT_FOUND,
				data: {},
				msg: "FILM_NOT_FOUND"
			});
		}

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
			ep: ep
		}, ep.done("fill_film"));

	});
	film_dao.getFilm(film_id, ep.done("fetch_film"));
};
