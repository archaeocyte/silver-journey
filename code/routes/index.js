var express = require('express');
var app = express();
var router = express.Router();

var path = require("path");

var user_controller = require("../controllers").user;
var film_controller = require("../controllers").film;
var cinema_controller = require("../controllers").cinema;
var session_controller = require("../controllers").session;

module.exports = function() {


	router.get("/api/test", user_controller.authUser);

	router.get("/api/film/list", film_controller.list);
	router.get("/api/film/detail/:id", film_controller.detail);
	router.get("/api/film/findBy/:id", film_controller.findBy);

	router.get("/api/cinema/list", cinema_controller.list);
	router.get("/api/cinema/detail/:id", cinema_controller.detail);
	router.get("/api/cinema/findBy/:id", cinema_controller.findBy);

	router.get("/api/session/findBy/cinema/:id", session_controller.findByCinema);
	router.get("/api/session/findBy/film/:id", session_controller.findByFilm);
	router.get("/api/session/findBy/:cinema_id/:film_id", session_controller.findBy);
	router.get("/api/session/detail/:id", session_controller.detail);

	return router;
};