(function (angular) {
    angular.module('controllers.orderDetailController', [])
        .controller('OrderDetailCtrl', OrderDetailCtrl);

    OrderDetailCtrl.$inject = ['OrderService', '$log', '$state', 'DateService', 'toastr', 'LoadingPopup'];

    function OrderDetailCtrl(OrderService, $log, $state, DateService, toastr, LoadingPopup) {
        var vm = this;
        
         vm.item = JSON.parse($state.params.item);
         console.log(vm.item);
        vm.updateValuePayment = updateValuePayment;
        
        vm.orderPendingPayment = true;//verifyPendingPayment();
        vm.pendingFallback = true;
        function updateValuePayment(){
            toastr.success('Valor Atualizado com sucesso!');
        }
        
        function verifyPendingPayment() {
            var order = vm.item.order;
            var pending =  (order.total - (order.discount + order.entrance)) < 0;
            
            return pending;
        }    
    }
    
})(angular);