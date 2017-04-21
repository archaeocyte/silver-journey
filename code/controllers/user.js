var eventproxy = require("eventproxy");
var user_dao = require("../dao").user;
var error_code = require("./error_code");
var _ = require("lodash");

module.exports = {
	authUser: function(req, res, next) {
		var email = req.query.email;
		var password = req.query.password;
		var ep = new eventproxy();
		ep.fail(next);
		ep.on("task", function(rows) {
			if (rows.length === 0) {
				return res.send({
					code: error_code.USER_NOT_FOUND,
					data: {},
					msg: "USER_NOT_FOUND"
				});
			}
			var user = rows[0];
			if (user.password !== password) {
				return res.send({
					code: error_code.WRONG_PASSWORD,
					data: {},
					msg: "WRONG_PASSWORD"
				});
			}
			delete user.password;
			req.session.user = user;

			return res.send({
				code: error_code.SUCCESS,
				data: {
					user: user
				},
				msg: "SUCCESS"
			});
		});
		user_dao.getUserByEmail(email, ep.done("task"));
	}
};