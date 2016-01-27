(function (angular) {
    var app = angular.module('artmanager', [
        'ionic',
        'app.routes',
        
        'controllers.appController',
        'controllers.loginController',
        'controllers.orderController',
        'controllers.userController',
        'controllers.providerController',
        'controllers.clientController',
        'controllers.productController',
        'controllers.productCountController',
        'controllers.employeeController',
        'controllers.employeeDetailController',
        
        'services.loginService',
        'services.utilService',
        'services.userService',
        'services.clientService',
        'services.productService',
        'services.employeeService',
        'services.orderService',
        
        'ionic-material',
        'ionMdInput',
        'ui.utils.masks'
    ]);

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });



})(angular);