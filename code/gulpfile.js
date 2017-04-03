var gulp = require('gulp');
var sftp = require('gulp-sftp');
var devel_braeco,
	wuaotian;
try {
	devel_braeco = require('./secret.json');
	wuaotian = require("./wuaotian.json");
} catch(e) {

}

gulp.task('upload_static', ['build'], function(cb) {
	gulp.src('./dist/silver-journey/**/*')
		.pipe(sftp({
			host: devel_braeco.host,
			user: devel_braeco.username,
			pass: devel_braeco.password,
			remotePath: "/home/web/dist/silver-journey/",
			callback: function() {
				cb(null);
			}
		}));
});

gulp.task('upload_html', ['upload_static'], function() {
	gulp.src('./dist/index.html')
		.pipe(sftp({
			host: wuaotian.host,
			user: wuaotian.username,
			pass: wuaotian.password,
			remotePath: "/home/wuaotian/silver-journey/code/dist",
			callback: function() {
				console.log("success");
			}
		}));
});

gulp.task('build', function(cb) {
	var task = require("./build/gulp-build.js");
	task(function() {
		cb(null);
	});
});

gulp.task('default', ['build', 'upload_static', 'upload_html'], function() {

});