(function (angular) {
    var app = angular.module('controllers.productController', []);
    app.controller('ProductsCtrl', function ($scope, ProductsService) {
        $scope.produts = [];
        $scope.init = (function () {
            ProductsService.products().then(function (itens) {
                $scope.produts = itens;
                debugger;
            });
        })();

    });



})(angular);