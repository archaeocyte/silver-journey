var eventproxy = require("eventproxy");
var cinema_dao = require("../dao").cinema;
var share_dao = require("../dao").share;
var error_code = require("./error_code");
var _ = require("lodash");
var async = require("async");

exports.list = function list(req, res, next) {
	var ep = new eventproxy();
	ep.fail(next);

	ep.on("fetch_cinema_list", function(cinemas) {
		_.forEach(cinemas, function(cinema) {
			cinema.services = JSON.parse(cinema.service);
			delete cinema.service;
		});
		return res.send({
			code: error_code.SUCCESS,
			data: {
				cinemas: cinemas
			},
			msg: "SUCCESS"
		});
	});

	cinema_dao.getCinema(null, ep.done("fetch_cinema_list"));
};
