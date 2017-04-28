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


	var basePath = "../../db_src";

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


	var traversalDir = require("../common").traversalDir;
	traversalDir(basePath, function(err, filesList) {
		console.log(filesList);
		checkToUpload(filesList);
	});

}
