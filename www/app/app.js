/*global cordova, StatusBar */
(function (angular) {
    var app = angular.module('artmanager', [
        'ionic',
        'app.routes',
        'app.views',
        'ngResource',
        'ngMaterial',
        'ngAnimate',
        'ngAria',
        'ngMessages',
        'ngMenuSidenav',
        'toastr',
    // 'material.svgAssetsCache',
        
                
        'controllers.appController',
        'controllers.loginController',
        'controllers.productionController',
        'controllers.productionDetailController',
        'controllers.orderController',
        'controllers.orderListController',
        'controllers.orderDetailController',
        'controllers.userController',
        'controllers.providerController',
        'controllers.clientController',
        'controllers.productController',
        'controllers.productCountController',
        'controllers.productRegisterController',
        'controllers.employeeController',
        'controllers.employeeDetailController',
        'controllers.boxClosingController',



        'services.loginService',
        'services.utilService',
        'services.userService',
        'services.clientService',
        'services.productService',
        'services.employeeService',
        'services.productionService',
        'services.providerService',
        'services.orderService',
        'services.boxClosingService',
        'filters.commonFilters',

        'directives.filter-grid',
        
    // 'angular-material',
    // 'ionMdInput',
        'ui.utils.masks'
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
    app.config(['$mdThemingProvider', '$mdGestureProvider',
        function ($mdThemingProvider, $mdGestureProvider) {
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
            $mdGestureProvider.skipClickHijack();
        }]);

    app.config(['toastrConfig', function (toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: true,
            timeOut: 5000,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        });
    }]);
    
    // app.config(['$httpProvider', function ($httpProvider) {
    //     $httpProvider.interceptors.push('httpRequestInterceptor');
    //     console.log($httpProvider);
    // }]);
})(angular);