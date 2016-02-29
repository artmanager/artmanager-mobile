(function (angular) {
    var app = angular.module('controllers.productCountController', []);
    app.controller('ProductCountCtrl', ['$scope', 'ProductService',function ($scope, ProductService){
        var self = $scope;
        self.item = {};
        
        self.init = (function () {
          ProductService.productsCountMonth().then(function (item) {
             self.item = item;
             console.log(item); 
          });
        })();
        
    }]);
    
    
    
})(angular);