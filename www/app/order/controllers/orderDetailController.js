(function (angular) {
    angular.module('controllers.orderDetailController', [])
        .controller('OrderDetailCtrl', OrderDetailCtrl);
    OrderDetailCtrl.$inject = ['$stateParams', 'OrderService', 'LoadingPopup', 'toastr'];
    function OrderDetailCtrl($stateParams, OrderService, LoadingPopup, toastr) {
        var vm = this;

        var item = $stateParams.item;
        vm.item = JSON.parse(item);

        vm.updateStatus = updateStatus;

        function updateStatus() {
            var status = vm.item.percentage_conclusion;
            
            if (status === 100)  {
                var confirmar = confirm('Deseja concluir produção?');
                if (!confirmar) return;
            }
            
            var id = vm.item.id_production;
            var obj = { percentage: status, id: id };
                
            LoadingPopup.show();
            onUpdateSuccess();
            // OrderService.updateStatus(obj).then(onUpdateSuccess, onUpdateFail);

        }
        function onUpdateSuccess(success) {
            LoadingPopup.hide();
            toastr.success('Operação realizada com sucesso!');
        }
        function onUpdateFail(success) {
            LoadingPopup.hide();
            toastr.error('Erro ao realizar sua solicitacao');

        }
    }

})(angular);