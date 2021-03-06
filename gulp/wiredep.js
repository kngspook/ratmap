'use strict';

var gulp = require('gulp');

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('{app,components}/*.scss')
    .pipe(wiredep({
      directory: 'bower_components',
      ignorePath: /^\/|\.\.\//
    }))
    .pipe(gulp.dest(''));

  gulp.src('*.html')
    .pipe(wiredep({
      directory: 'bower_components',
      exclude: ['bootstrap-sass-official'],
      ignorePath: /^\/|\.\.\//
    }))
    .pipe(gulp.dest(''));
});
