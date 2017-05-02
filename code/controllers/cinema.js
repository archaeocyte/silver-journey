var eventproxy = require("eventproxy");
var cinema_dao = require("../dao").cinema;
var share_dao = require("../dao").share;
var error_code = require("./error_code");
var _ = require("lodash");
var async = require("async");

function fillCinemaDetail(cinema, supply, callback) {
	var ep = supply.ep;

	ep.all([
		`${cinema.id}_get_comment`
	], function(comments) {

		cinema.comments = comments;

		cinema.services = JSON.parse(cinema.service);
		delete cinema.service;

		callback(null, cinema);
	});

	cinema_dao.getCommentById(cinema.id, ep.done(`${cinema.id}_get_comment`));

}

exports.list = function list(req, res, next) {
	var ep = new eventproxy();
	ep.fail(next);

	ep.on("fetch_cinema_list", function(cinemas) {
		var allTask = [];
		_.forEach(cinemas, function(cinema) {
			allTask.push(function(task_callback) {
				fillCinemaDetail(cinema, {
					ep: ep
				}, task_callback);
			});
		});

		async.parallelLimit(allTask, 10, function(err, cinemas) {
			return res.send({
				code: error_code.SUCCESS,
				data: {
					cinemas: cinemas
				},
				msg: "SUCCESS"
			});
		});

	});

	cinema_dao.getCinema(null, ep.done("fetch_cinema_list"));
};


exports.findBy = function findBy(req, res, next) {
	var film_id = req.params.id,
		ep = new eventproxy();

	ep.on("fetch_cinema_list", function(cinemas) {
		var allTask = [];
		_.forEach(cinemas, function(cinema) {
			allTask.push(function(task_callback) {
				fillCinemaDetail(cinema, {
					ep: ep
				}, task_callback);
			});
		});

		async.parallelLimit(allTask, 10, function(err, cinemas) {
			return res.send({
				code: error_code.SUCCESS,
				data: {
					cinemas: cinemas
				},
				msg: "SUCCESS"
			});
		});
	});

	share_dao.getCinemaByFilmId(film_id, ep.done("fetch_cinema_list"));
};
