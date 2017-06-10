var cos = require('cos-nodejs-sdk-v5'),
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


var cosAPI = new cos({
	AppId: AppId,
	SecretId: SecretId,
	SecretKey: SecretKey
});

exports.cosAPI = cosAPI;
exports.cosConfig = {
	AppId: AppId,
	SecretId: SecretId,
	SecretKey: SecretKey
};




if (!module.parent) {


	var basePath = "../../db_src";
	var traversalDir = require("../common").traversalDir;

	function checkToUpload(filesList) {
		var item = filesList.shift();
		if (item) {
			var ContentLength = item.size,
				Body = item.path,
				Key = item.path.replace(`${basePath}/`, ""),
				Bucket = "silverjourney",
				Region = "cn-south";
			cosAPI.putObject({
				ContentLength: ContentLength,
				Body: Body,
				Bucket: Bucket,
				Region: Region,
				Key: Key
			}, function() {
				console.log(arguments);
				checkToUpload(filesList);
			});
		}
	}


	traversalDir(basePath, function(err, filesList) {
		console.log(filesList);
		checkToUpload(filesList);
	});

}
