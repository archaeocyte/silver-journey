var express = require('express');
var app = express();
var router = express.Router();

var path = require("path");

var user_controller = require("../controllers").user;

module.exports = function() {


	router.get("/api/test", user_controller.authUser);

	return router;
};