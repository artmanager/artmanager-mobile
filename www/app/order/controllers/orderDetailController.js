(function (angular) {
    angular.module('controllers.orderDetailController', [])
        .controller('OrderDetailCtrl', OrderDetailCtrl);

    OrderDetailCtrl.$inject = ['OrderService', '$log', '$state', 'DateService', 'toastr', 'LoadingPopup'];

    function OrderDetailCtrl(OrderService, $log, $state, DateService, toastr, LoadingPopup) {
        var vm = this;
        
         vm.item = JSON.parse($state.params.item);
         
    }
    
})(angular);