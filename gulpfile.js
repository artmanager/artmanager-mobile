/* global __dirname, process */
var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
 var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var files = require('./www/files-dependencies');

var bower = require('bower');
var sh = require('shelljs');
var exec = require('child_process').exec;
var Server = require('karma').Server;
var paths = {
    templatecache: ['./www/app/**/*.html'],
    js: ['www/app/**/*.js'],
    sass: ['./scss/**/*.scss']
};

var gulp = require('gulp');
var projectFiles = require('./scripts/gulp-folders');

var PATH_TO_APP = 'www/app';




gulp.task('default', ['watch']);
 
gulp.task('create-folders', function () {
    var args = process.argv;
    if (args[3] === "--n") {
        var item = args[4];
        var folderLocation = PATH_TO_APP + '/' + item + '/';
        projectFiles.createFolder(folderLocation);
        projectFiles.createFiles(folderLocation, item);
    }
});

gulp.task('minify-concat', function() {
  return gulp.src(files)
        .pipe(concat('all.min.js', {newLine: ';'}))
        .pipe(uglify())
        .pipe(gulp.dest('www/dist'));
});
 
 gulp.task('lint', function() {
  return gulp.src('./www/app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
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
    var watchTasks = ['templatecache', 'minify-concat',  'lint', 'tests'];
    var watchTestTasks = ['tests', 'templatecache'];
    
    
    gulp.watch(['www/**/*', '!www/dist/*.js'], watchTasks);
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
