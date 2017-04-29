var express = require('express');
var app = express();
var router = express.Router();

var path = require("path");

var user_controller = require("../controllers").user;
var film_controller = require("../controllers").film;

module.exports = function() {


	router.get("/api/test", user_controller.authUser);

	router.get("/api/film/list", film_controller.list);

	return router;
};