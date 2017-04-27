var connection = require("./connection");
var utils = require("../utils");

module.exports = {
	getUserOR: function(options, callback) {
		var whereStr = utils.getSqlWhereArr(options).join(" OR ");
		var sql = `
			select * from user
			where ${whereStr}
		`;
		connection.query(sql, [], callback);
	},
	getUserAND: function(options, callback) {
		var whereStr = utils.getSqlWhereArr(options).join(" AND ");
		var sql = `
			select * from user
			where ${whereStr}
		`;
		connection.query(sql, [], callback);
	},
	insertUser: function(options, callback) {
		var KV = utils.getSqlKV(options);
		var sql = `
			insert into user (${KV.params.join(",")})
				values (${KV.values.join(",")});
		`;
		connection.query(sql, [], callback);
	}
};


if (!module.parent) {
	module.exports.getUserAND({
		username: "admin",
		type: 99
	}, function(err, rows) {
		console.log(rows);
	});
}
