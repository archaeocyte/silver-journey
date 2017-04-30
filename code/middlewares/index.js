var error_code = require("../controllers/error_code");

module.exports = {
	auth: function(auth_need) {
		auth_need = auth_need || [];
		return function(req, res, next) {
			var request_path = req.pathname,
				user = req.session.user;

			if (
				auth_need.indexOf(request_path) < 0
			|| 	user
			) {
				return next();
			}
			return res.send({
				code: error_code.NEED_LOGIN,
				data: {},
				msg: "NEED_LOGIN"
			});
		}
	}
};
