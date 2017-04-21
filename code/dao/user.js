var connection = require("./connection");

module.exports = {
	getUserByEmail: function(email, callback) {
		var sql = `
			select * from user
			where email = '${email}'
		`;
		connection.query(sql, [], callback);
	}
};