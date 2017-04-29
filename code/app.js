var express = require('express')

var route = require("./routes")();
var middlewares = require("./middlewares");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var logger = require('morgan');

var port = 3000;


var app = express();

var compression = require('compression');

var wuaotian = require("./wuaotian.json");

app.use(compression());  


app.use(logger("dev"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser("secret"));

app.use(session({
	name: wuaotian.session.name,
	secret: wuaotian.session.secret,
	cookie: {
		maxAge: 60 * 60 * 1000
	},
	resave: false,
	saveUninitialized: false
}));

var auth_ignore = [
	"/user/login",
	"/film/list",
];

app.use("/api", middlewares.auth(auth_ignore));

app.use(route);

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

app.use(express.static('dist'));

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        msg: err.message,
        error: {}
    });
});

app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')
})