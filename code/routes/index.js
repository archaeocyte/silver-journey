var express = require('express');
var app = express();
var router = express.Router();

var path = require("path");

var user_controller = require("../controllers").user;
var film_controller = require("../controllers").film;
var cinema_controller = require("../controllers").cinema;

module.exports = function() {


	router.get("/api/test", user_controller.authUser);

	router.get("/api/film/list", film_controller.list);
	router.get("/api/film/detail/:id", film_controller.detail);
	router.get("/api/film/findBy/:id", film_controller.findBy);

	router.get("/api/cinema/list", cinema_controller.list);
	router.get("/api/cinema/findBy/:id", cinema_controller.findBy);

	return router;
};