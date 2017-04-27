
exports.getSqlKV = function getSqlParam(options) {
	var result = {
		params: [],
		values: []
	};
	for (var key in options) {
		var _ref = options[key];
		if (_ref) {
			result.params.push(key);
			var temp = _ref;
			if (typeof temp === 'string') {
				temp = `'${temp}'`;
			}
			result.values.push(temp);
		}
	}
	return result;
};

exports.getSqlWhereArr = function getSqlWhereArr(options) {
	var result = [];
	for (var key in options) {
		var _ref = options[key];
		var temp = _ref;
		if (typeof temp === 'string') {
			temp = `'${temp}'`;
		}
		result.push(`${key} = ${temp}`);
	}
	return result;
}
