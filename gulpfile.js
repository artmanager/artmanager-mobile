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
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var paths = {
    templatecache: ['./www/app/**/*.html'],
    js: ['www/app/**/*.js'],
    sass: ['./scss/**/*.scss']
};


gulp.task('default', ['watch']);
 
 
 gulp.task('lint', function() {
  return gulp.src('./www/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('compress', function() {
  return gulp.src(paths.js)
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('www/build'));
});
gulp.task('templatecache', function (done) {
    gulp.src(paths.templatecache)
        .pipe(templateCache(
            {
                standalone: true,
                filename: 'views.js',
                module: 'app.views',
                root: 'templates/'
            }))
        .pipe(gulp.dest('./www/app/'))
        .on('end', done);
});

gulp.task('tests', function (done) {
    new Server({
        configFile: __dirname + '/tests/karma.conf.js',
        singleRun: true
    }, function () {
        done();
    }).start();
});

gulp.task('watch', function () {
    var watchTasks = ['compress','templatecache', 'lint', 'tests'];
    var watchTestTasks = ['tests', 'templatecache'];
    
    gulp.watch(['www/**/*', "!www/build/**/*"], watchTasks);
    gulp.watch('tests/**/*', watchTestTasks);

});

gulp.task('sass', function (done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('install', ['git-check'], function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
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
