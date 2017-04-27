var cosAPI = require('cos-nodejs-sdk-v5'),
	cosConfig = require('cos-nodejs-sdk-v5/sdk/config'),
	wuaotian,
	AppId,
	SecretId,
	SecretKey;

var parseString = require('xml2js').parseString;


try {
	wuaotian = require("../wuaotian.json");
	AppId = wuaotian.qcloud.AppId;
	SecretId = wuaotian.qcloud.SecretId;
	SecretKey = wuaotian.qcloud.SecretKey;
} catch(e) {

}

cosConfig.setAppInfo(AppId, SecretId, SecretKey);



exports.cosAPI = cosAPI;




if (!module.parent) {
	cosAPI.getService({}, function(err, data) {
		console.log(JSON.stringify(data));
	});

	var path = require('path'),
		fs = require('fs');

	var basePath = path.join(__dirname, "../../db_src/picture/actor/1.jpg"),
		state = fs.statSync(basePath),
		length = state.size;

	fs.readFile(basePath, function(err, data) {
		console.log(data.length, length, basePath);
		cosAPI.putObject({
			ContentLength: length,
			Body: basePath,
			Bucket: "silverjourney",
			Region: "cn-south",
			Key: "test.jpg"
		}, function() {
			console.log(arguments);
		});
	});
}
