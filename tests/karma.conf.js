// Karma configuration
// Generated on Wed Jan 27 2016 13:15:22 GMT-0200 (BRST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            '../www/lib/ionic/js/ionic.bundle.js',
            '../www/lib/ionic-material/dist/ionic.material.min.js',
            '../www/lib/ion-md-input/js/ion-md-input.min.js',
            '../www/lib/angular-mocks/angular-mocks.js',
            '../www/lib/angular-input-masks/angular-input-masks-standalone.min.js',
            '../www/lib/jasmine-promise-matchers/dist/jasmine-promise-matchers.min.js',
            '../www/app/**/**/**/*.js',
            '**/*.test.js',
            '**/*.spec.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        preprocessors: {
            '../www/app/*/**/*.js': 'coverage',
            '**/*.test.js': 'coverage'
        },
        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: '../coverage/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
