(function (angular) {
    var app = angular.module('app.routes', []);
    app.config(['$urlRouterProvider', '$stateProvider', '$ionicConfigProvider', function ($urlRouterProvider, $stateProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.maxCache(0);

        var stateProvider = $stateProvider;

        stateProvider.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/common/menu.html',
            controller: 'AppCtrl',
            controllerAs: 'vm'
        });

        stateProvider.state('login', {
            url: '/login',

            templateUrl: 'templates/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm'

        });
        stateProvider.state('app.orders', {
            url: '/orders',
            title: 'Pedidos',
            views: {
                'menuContent': {
                    templateUrl: 'templates/order/orders.html',
                    controller: 'OrderCtrl',
                    controllerAs: 'vm',
                }
            }
        });
        stateProvider.state('app.orderDetail', {
            url: '/orders/:id',
            title: 'Detalhes Pedido',
            views: {
                'menuContent': {
                    templateUrl: 'templates/order/order-detail.html',
                    controller: 'OrderDetailCtrl',
                    controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.createUser', {
            url: '/createUser',
            title: 'Cadastrar Usuário',
            views: {
                'menuContent': {
                    templateUrl: 'templates/user/form-user.html',
                    controller: 'UserCtrl',
                    controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.createClient', {
            url: '/createClient',
            title: 'Cadastrar Clientes',
            views: {
                'menuContent': {
                    templateUrl: 'templates/client/form-client.html',
                    controller: 'ClientCtrl',
                    controllerAs: 'vm'
                }
            }
        });

        stateProvider.state('app.createProvider', {
            url: '/createProvider',
            title: 'Cadastrar Fornecedor',
            views: {
                'menuContent': {
                    templateUrl: 'templates/provider/form-provider.html',
                    controller: 'ProviderCtrl',
                    controllerAs: 'vm'
                }
            }
        });

        stateProvider.state('app.products', {
            url: '/products',
            title: 'Produtos',
            views: {
                'menuContent': {
                    templateUrl: 'templates/product/products.html',
                    controller: 'ProductCtrl',
                    controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.productsCount', {
            url: '/products/count',
            title: 'Relatorio de Produtos',
            views: {
                'menuContent': {
                    templateUrl: 'templates/product/products-count.html',
                    controller: 'ProductCountCtrl',

                    controllerAs: 'vm'
                }
            }
        });

        stateProvider.state('app.employees', {
            url: '/employees',
            title: 'Fornecedores',
            views: {
                'menuContent': {
                    templateUrl: 'templates/employee/employees.html',
                    controller: 'EmployeeCtrl',
                    controllerAs: 'employees'
                }
            }
        });
        stateProvider.state('app.employeesDetail', {
            url: '/employees/:id',
            title: 'Detalhes',
            views: {
                'menuContent': {
                    templateUrl: 'templates/employee/employees-detail.html',
                    controller: 'EmployeeDetailCtrl',
                    controllerAs: 'employees'
                }
            }
        });
        $urlRouterProvider.otherwise('/login');
    }]);

})(angular);