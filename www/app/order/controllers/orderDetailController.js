(function (angular) {
    angular.module('controllers.orderDetailController', [])
        .controller('OrderDetailCtrl', OrderDetailCtrl);

    OrderDetailCtrl.$inject = ['OrderService', '$log', '$state', 'DateService', 'toastr', 'LoadingPopup'];

    function OrderDetailCtrl(OrderService, $log, $state, DateService, toastr, LoadingPopup) {
        var vm = this;

        vm.item = JSON.parse($state.params.item);
        console.log('vm.item', vm.item);
        vm.updateValuePayment = updateValuePayment;
        vm.registerFallbackProducts = registerFallbackProducts;

        vm.orderPendingPayment = verifyPendingPayment();
        vm.back = back;
        
        function back() {
            $state.go('app.orders');
        }
        
        function updateValuePayment() {
            var data = {
                id: vm.item.id,
                entrance: vm.pendingValue
            };
            LoadingPopup.show();
            OrderService.updateStatus(data).then(onUpdateStatusSuccess, onUpdateStatusFail);
        }
        function registerFallbackProducts() {
            var data = {
                id: vm.item.id,
                pendingFallback: true,
                entrance: 0
            };
            LoadingPopup.show();
            OrderService.updateStatus(data).then(onUpdateStatusSuccess, onUpdateStatusFail);

        }

        function verifyPendingPayment() {
            var order = vm.item.order;
            var pending = ((order.discount + order.entrance) - order.total) < 0;
            console.log(pending);
            return pending;
        }
        function onUpdateStatusSuccess(result) {
            LoadingPopup.hide();
            if(result.success)
                toastr.success('Valor Atualizado com sucesso!');
            else if(result.error) 
                toastr.error('Erro ao atualizar pedido');
                
        }
        function onUpdateStatusFail(result) {
            toastr.error('Erro ao atualizar pedido' + result);
            LoadingPopup.hide();
            
        }
    }

})(angular);