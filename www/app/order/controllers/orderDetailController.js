(function (angular){
    var app = angular.module('controllers.orderDetailController', []);
    app.controller('OrderDetailCtrl', function ($scope,$stateParams, OrderService){
        var self = $scope;
        
        var id = $stateParams.id;
        self.items = [];
        self.init = (function () {
            
            OrderService.order(id).then(function (value) {
               
               self.items = value;
               console.log(value) 
            });
        })();
        
        
    });
    
})(angular)