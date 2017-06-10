var eventproxy = require("eventproxy");
var error_code = require("./error_code");
var _ = require("lodash");

var CryptoJS = require("crypto-js");

var SDK = require("../sdk"),
    cosAPI = SDK.cosAPI,
    cosConfig = SDK.cosConfig;


exports.uploadPhoto = function uploadPhoto(req, res, next) {
    var body = req.body,
    	query = req.query;

    var ep = new eventproxy();

    ep.fail(next);

    var ContentLength = query.ContentLength,
    	dir_path = query.dir_path;

    dir_path = dir_path
    		? 	`${dir_path}/`
    		: 	"";

    console.log(ContentLength, dir_path);

    ep.all(["upload_finish", "task_finish"], function() {
    	res.send({
        	code: error_code.SUCCESS,
        	data: {},
        	msg: "SUCCESS"
        });
    });

    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    	console.log("file");
    	var Body = file,
			Key = `${dir_path}${filename}`,
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
			ep.done("upload_finish").apply(this, arguments);
		});
    });
    req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
    	console.log("field");
    });
    req.busboy.on('finish', function() {
    	console.log("finish");
    	ep.done("task_finish").apply(this, arguments);
    });
    req.pipe(req.busboy);
};

exports.getAuth = function getAuth(req, res, next) {
    var defaultAuth = {
        appid : cosConfig.APPID,
        secretId : cosConfig.SECRET_ID,
        secretKey : cosConfig.SECRET_KEY,
        headers: {},
        pathname: "/",
        method: "GET",
        bucket: "silverjourney",
        path: ""
    };

    var query = req.query;
    var options = _.extend(defaultAuth, query);

    var random = parseInt(Math.random() * Math.pow(2, 32));
    var now = parseInt(new Date().getTime() / 1000);
    var e = now + 60; //单次签名 expire==0
    var path = options.path;
    var str = 'a=' + options.appid + '&k=' + options.secretId + '&e=' + e + '&t=' + now + '&r='+
            random + '&f=' + path + '&b=' + options.bucket;
    var sha1Res = CryptoJS.HmacSHA1(str, options.secretKey);//这里使用CryptoJS计算sha1值，你也可以用其他开源库或自己实现
    var strWordArray = CryptoJS.enc.Utf8.parse(str);
    var resWordArray = sha1Res.concat(strWordArray);
    var sign = resWordArray.toString(CryptoJS.enc.Base64);


    console.log(options);
    return res.send({
        code: error_code.SUCCESS,
        data: {
            sign: sign
        },
        msg: "SUCCESS"
    });
};
