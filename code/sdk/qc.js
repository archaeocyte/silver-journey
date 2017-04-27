var qcSDK = require('qcloudapi-sdk'),
	wuaotian,
	SecretId,
	SecretKey;

var parseString = require('xml2js').parseString;
var crypto = require('crypto');
var CryptoJS = require('crypto-js');  

try {
	wuaotian = require("../wuaotian.json");
	SecretId = wuaotian.qcloud.SecretId;
	SecretKey = wuaotian.qcloud.SecretKey;
} catch(e) {

}

var cosAPI = new qcSDK({
	serviceType: 'cos',
	SecretId: wuaotian.qcloud.SecretId,
	SecretKey: wuaotian.qcloud.SecretKey
});

exports.cosAPI = cosAPI;


var getAuthorization = function(options) {

	options = options || {};

	// 有效时间为当前时间至五分钟后
	var start_time = Math.floor(+new Date() / 1000);
	var end_time = start_time + 80000;

	var q_key_time = `${start_time};${end_time}`;
	var q_sign_time = `${start_time};${end_time}`;

	if (true) {
		SecretKey = "AKIDZfbOA78asKUYBcXFrJD0a1ICvR98JM";
		q_key_time = "1480932292;1481012292";
		options.method = "get";
		options.uri = "/testfile";
		options.parameters = "";
		options.headers
	}

	var sign_key = CryptoJS.HmacSHA1(q_key_time, SecretKey).toString();
	console.log(sign_key);
}

if (!module.parent) {
	var url = cosAPI.generateUrl({
		path: '/picture/actor/1.jpg',
		host: 'silverjourney-1253262853.cosgz.myqcloud.com'
	});
	console.log(url);

	getAuthorization();

	cosAPI.request({}, {
		path: '/picture/actor/1.jpg?acl',
		host: 'silverjourney-1253262853.cosgz.myqcloud.com',
		protocol: 'http'
	}, function(err, xml) {
		console.log(xml);
		parseString(xml, function(err, result) {
			console.log(result);
		});
	}, {
		headers: {
			Date: new Date()
			//Range: "bytes=byte_range"
		}
	});
}
