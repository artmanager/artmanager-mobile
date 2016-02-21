(function (angular) {
    var app = angular.module('app.routes', []);
    app.config(function ($urlRouterProvider, $stateProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(0);

        var stateProvider = $stateProvider;

        stateProvider.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'app/common/menu.html',
            controller: 'AppCtrl',
            controllerAs: 'vm'
        });

        stateProvider.state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'app/login/login.html',
                    controller: 'LoginCtrl',
            controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.orders', {
            url: '/orders',
            views: {
                'menuContent': {
                    templateUrl: 'app/order/orders.html',
                    controller: 'OrderCtrl',
            controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.orderDetail', {
            url: '/orders/:id',
            views: {
                'menuContent': {
                    templateUrl: 'app/order/order-detail.html',
                    controller: 'OrderDetailCtrl',
            controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.createUser', {
            url: '/createUser',
            views: {
                'menuContent': {
                    templateUrl: 'app/user/form-user.html',
                    controller: 'UserCtrl',
            controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.createClient', {
            url: '/createClient',
            views: {
                'menuContent': {
                    templateUrl: 'app/client/form-client.html',
                    controller: 'ClientCtrl',
            controllerAs: 'vm'
                }
            }
        });

        stateProvider.state('app.createProvider', {
            url: '/createProvider',
            views: {
                'menuContent': {
                    templateUrl: 'app/provider/form-provider.html',
                    controller: 'ProviderCtrl',
            controllerAs: 'vm'
                }
            }
        });

        stateProvider.state('app.products', {
            url: '/products',
            views: {
                'menuContent': {
                    templateUrl: 'app/product/products.html',
                    controller: 'ProductCtrl',
            controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.productsCount', {
            url: '/products/count',
            views: {
                'menuContent': {
                    templateUrl: 'app/product/products-count.html',
                    controller: 'ProductCountCtrl',
                    
            controllerAs: 'vm'
                }
            }
        });
        
        stateProvider.state('app.employees', {
            url: '/employees',
            views: {
                'menuContent': {
                    templateUrl: 'app/employee/employees.html',
                    controller: 'EmployeeCtrl',
                    controllerAs: 'employees'
                }
            }
        });
        stateProvider.state('app.employeesDetail', {
            url: '/employees/:id',
            views: {
                'menuContent': {
                    templateUrl: 'app/employee/employees-detail.html',
                    controller: 'EmployeeDetailCtrl',
                    controllerAs: 'employees'
                }
            }
        });
        $urlRouterProvider.otherwise('/app/login');
    });

})(angular);