(function (angular) {
    // Ionic Starter App

    // angular.module is a global place for creating, registering and retrieving Angular modules
    // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
    // the 2nd parameter is an array of 'requires'
    var app = angular.module('artmanager', [
        'ionic',
        'app.routes',
        
        'controllers.appController',
        'controllers.loginController',
        'controllers.dashboardController',
        'controllers.userController',
        'controllers.providerController',
        'controllers.clientController',
        'controllers.productController',
        'controllers.employeeController',
        'controllers.employeeDetailController',
        
        'services.loginService',
        'services.utilService',
        'services.userService',
        'services.clientService',
        'services.productsService',
        'services.employeeService',
        
        'ionic-material',
        'ionMdInput',
        'ui.utils.masks'
    ]);

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });



})(angular);