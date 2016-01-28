/* global __dirname, process */
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var exec = require('child_process').exec;
var Server = require('karma').Server;

var paths = {
  sass: ['./scss/**/*.scss']
};


gulp.task('default', ['tests','watch']);

gulp.task('tests',function(done) {
  new Server({
    configFile: __dirname + '/tests/karma.conf.js',
    singleRun: true
  }, done).start();
});
      

gulp.task('watch', function() {
  gulp.watch('./www/app/**', ['tests']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
