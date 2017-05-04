var eventproxy = require("eventproxy");
var session_dao = require("../dao").session;
var share_dao = require("../dao").share;
var error_code = require("./error_code");
var _ = require("lodash");
var async = require("async");

function fillSessionDetail(session, supply, callback) {
	var ep = supply.ep;

	ep.all([
		`${session.id}_get_language`
	], function(
		session_languages
	) {

		session.language = session_languages[0];

		callback(null, session);
	});

	session_dao.getSessionLanguageById(session.id, ep.done(`${session.id}_get_language`));

}

exports.findByCinema = function findByCinema(req, res, next) {
	var cinema_id = req.params.id,
		ep = new eventproxy();

	ep.fail(next);

	ep.all([
		"fetch_session_list"
	], function(sessions) {
		var allTask = [];
		_.forEach(sessions, function(session) {
			if (session.id || session.id == 0) {
				allTask.push(function(task_callback) {
					fillSessionDetail(session, {
						ep: ep
					}, task_callback);
				});
			}
		});

		async.parallelLimit(allTask, 10, function(err, sessions) {
			return res.send({
				code: error_code.SUCCESS,
				data: {
					sessions: sessions
				},
				msg: "SUCCESS"
			});
		});
	});

	share_dao.getSessionByFilmAndCinema({
		cinema_id: cinema_id
	}, ep.done("fetch_session_list"));
}

exports.findByFilm = function findByFilm(req, res, next) {
	var film_id = req.params.id,
		ep = new eventproxy();

	ep.fail(next);

	ep.all([
		"fetch_session_list"
	], function(sessions) {
		var allTask = [];
		_.forEach(sessions, function(session) {
			if (session.id || session.id == 0) {
				allTask.push(function(task_callback) {
					fillSessionDetail(session, {
						ep: ep
					}, task_callback);
				});
			}
		});

		async.parallelLimit(allTask, 10, function(err, sessions) {
			return res.send({
				code: error_code.SUCCESS,
				data: {
					sessions: sessions
				},
				msg: "SUCCESS"
			});
		});
	});

	share_dao.getSessionByFilmAndCinema({
		film_id: film_id
	}, ep.done("fetch_session_list"));
}
