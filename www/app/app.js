/*global cordova, StatusBar */
(function (angular) {
    angular.module('controllers',
        [
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
            'controllers.employeeDetailController'
        ]);

    angular.module('services',
        [
            'services.loginService',
            'services.utilService',
            'services.userService',
            'services.clientService',
            'services.productService',
            'services.employeeService',
            'services.orderService',
        ]);

    angular.module('components',
        [
            'ionic',
            'ngResource',
            'ngMaterial',
            'ngAnimate',
            'ngAria',
            'ngMessages',
            'ngMenuSidenav',
            'ui.utils.masks'
        ]);

    angular.module('directives',
        [
            'directives.filter-grid'
        ]);

    angular.module('filters',
        [
            'filters.commonFilters'
        ]);


    angular.module('artmanager', [
        'components',
        'directives',
        'filters',
        'controllers',
        'services',
        'app.routes',
        'app.views']);
    function run($ionicPlatform) {
        function onReady() {
            if (window.cordova && window.cordova.plugins.Keyboard)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            if (window.StatusBar)
                StatusBar.styleDefault();
        }
        $ionicPlatform.ready(onReady);
    }
    angular.module('artmanager')
        .run(['$ionicPlatform', ionicConfig])
        .config(['$mdThemingProvider', '$mdGestureProvider', config]);

    function ionicConfig($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }
    function config($mdThemingProvider, $mdGestureProvider) {
        var customBlueMap =
            $mdThemingProvider
                .extendPalette('light-blue', {
                    'contrastDefaultColor': 'light',
                    'contrastDarkColors': ['50'],
                    '50': 'ffffff'
                });
        $mdThemingProvider.definePalette('customBlue', customBlueMap);
        $mdThemingProvider
            .theme('default')
            .primaryPalette('customBlue', {
                'default': '600',
                'hue-1': '50'
            })
            .accentPalette('pink')
            .theme('input', 'default')
            .primaryPalette('grey');
        $mdGestureProvider.skipClickHijack();
    }



})(angular);