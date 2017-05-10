var eventproxy = require("eventproxy");
var error_code = require("./error_code");
var _ = require("lodash");

var cosAPI = require("../sdk").cosAPI;


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