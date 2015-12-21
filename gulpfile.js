'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	webserver = require('gulp-webserver');
	
gulp.task('sass', function() {
	gulp.src('./css/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
	gulp.src('.')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: "http://localhost:8000/index.html"
		}));
});

gulp.task('default', ['sass', 'sass:watch', 'webserver']);