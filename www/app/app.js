/*global cordova, StatusBar */
(function (angular) {
    var app = angular.module('artmanager', [
        'ionic',
        'app.routes',
        'ngResource',
        'ngMaterial',
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngMenuSidenav',
    // 'material.svgAssetsCache',
        
                
        'controllers.appController',
        'controllers.loginController',
        'controllers.orderController',
        'controllers.orderDetailController',
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

        'filters.commonFilters',

        'directives.filter-grid'
        
        // 'angular-material',
        // 'ionMdInput',
        // 'ui.utils.masks'
    ]);

    app.run(['$ionicPlatform', function ($ionicPlatform) {

        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }]);
    //  red, pink, purple, deep-purple, indigo, blue, light-blue,
    // cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
    // app.config(function ($mdThemingProvider) {
    //     $mdThemingProvider.theme('default')
    //         .primaryPalette('purple');
    // });
    // app.config(function ($mdGestureProvider) {
    //     $mdGestureProvider.skipClickHijack();
    // });
    app.config(function ($mdThemingProvider) {
        var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50'],
            '50': 'ffffff'
        });
        $mdThemingProvider.definePalette('customBlue', customBlueMap);
        $mdThemingProvider.theme('default')
            .primaryPalette('customBlue', {
                'default': '600',
                'hue-1': '50'
            })
            .accentPalette('pink');
        $mdThemingProvider.theme('input', 'default')
            .primaryPalette('grey');
    });


    // wait for angular-material fix on ionic click hijacking
    app.config(function ($mdGestureProvider) {
        $mdGestureProvider.skipClickHijack();
    })
})(angular);