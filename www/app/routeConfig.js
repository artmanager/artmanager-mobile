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
       
        // stateProvider.state('app.production', {
        //     url: '/production',
        //     title: 'Produção',
        //     views: {
        //         'menuContent': {
        //             templateUrl: 'templates/production/production-items.html',
        //             controller: 'ProductionCtrl',
        //             controllerAs: 'vm',
        //         }
        //     }
        // });
        // stateProvider.state('app.productionDetail', {
        //     url: '/production/:item',
        //     title: 'Detalhes do Produto',
        //     views: {
        //         'menuContent': {
        //             templateUrl: 'templates/production/production-product-detail.html',
        //             controller: 'ProductionDetailCtrl',
        //             controllerAs: 'vm'
        //         }
        //     }
        // });
         stateProvider.state('app.production', {
            url: '/production',
            title: 'Produção',
            views: {
                'menuContent': {
                    templateUrl: 'templates/production/production-items.html',
                    controller: 'ProductionCtrl',
                    controllerAs: 'vm',
                }
            }
        });
        stateProvider.state('app.productionDetail', {
            url: '/production/:item',
            title: 'Detalhes Produto',
            views: {
                'menuContent': {
                    templateUrl: 'templates/production/production-product-detail.html',
                    controller: 'ProductionDetailCtrl',
                    controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.createOrder', {
            url: '/createOrder',
            title: 'Cadastrar Pedido',
            views: {
                'menuContent': {
                    templateUrl: 'templates/order/form-order.html',
                    controller: 'OrderCtrl',
                    controllerAs: 'vm',
                }
            }
        });
        stateProvider.state('app.orders', {
            url: '/orders',
            title: 'Pedidos',
            views: {
                'menuContent': {
                    templateUrl: 'templates/order/orders.html',
                    controller: 'OrderListCtrl',
                    controllerAs: 'vm',
                }
            }
        });
        stateProvider.state('app.orderDetail', {
            url: '/order/:item',
            title: 'Detalhes do Pedido',
            views: {
                'menuContent': {
                    templateUrl: 'templates/order/order-detail.html',
                    controller: 'OrderDetailCtrl',
                    controllerAs: 'vm',
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
            url: '/createClient/:clientName',
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
        stateProvider.state('app.createProduct', {
            url: '/createProduct',
            title: 'Cadastrar Produtos',
            views: {
                'menuContent': {
                    templateUrl: 'templates/product/form-products.html',
                    controller: 'ProductRegisterCtrl',
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
                    controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.employeesDetail', {
            url: '/employees/:item',
            title: 'Detalhes',
            views: {
                'menuContent': {
                    templateUrl: 'templates/employee/employees-detail.html',
                    controller: 'EmployeeDetailCtrl',
                    controllerAs: 'vm'
                }
            }
        });
        stateProvider.state('app.boxClosing', {
            url: '/boxClosing',
            title: 'Caixa',
            views: {
                'menuContent': {
                    templateUrl: 'templates/boxClosing/boxClosing.html',
                    controller: 'BoxClosingCtrl',
                    controllerAs: 'vm'
                }
            }
        });
        $urlRouterProvider.otherwise('/login');
    }]);

})(angular);