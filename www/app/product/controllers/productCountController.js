(function (angular) {
    angular.module('controllers.productCountController', [])
        .controller('ProductCountCtrl', ProductCountCtrl);
        
    ProductCountCtrl.$inject = ['$scope', 'ProductService'];
    function ProductCountCtrl($scope, ProductService) {
        var self = $scope;
        self.item = {};

        self.init = (function () {
            ProductService.productsCountMonth().then(function (item) {
                self.item = item;
                console.log(item);
            });
        })();

    }



})(angular);