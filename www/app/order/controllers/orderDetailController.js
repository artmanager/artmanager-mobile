(function (angular){
    angular.module('controllers.orderDetailController', [])
        .controller('OrderDetailCtrl', OrderDetailCtrl);
    OrderDetailCtrl.$inject = ['$scope','$stateParams', 'OrderService']; 
    function OrderDetailCtrl($scope,$stateParams, OrderService){
        var self = $scope;
        
        var id = $stateParams.id;
        self.items = [];
        self.init = (function () {
            
            OrderService.order(id).then(function (value) {
               
               self.items = value;
               console.log(value) ;
            });
        })();
        
        
    }
    
})(angular);