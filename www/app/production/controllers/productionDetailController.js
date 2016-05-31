(function (angular) {
    angular.module('controllers.productionDetailController', [])
        .controller('ProductionDetailCtrl', ProductionDetailCtrl);
    ProductionDetailCtrl.$inject = ['$stateParams', 'ProductionService', 'LoadingPopup', 'toastr', '$state'];
    function ProductionDetailCtrl($stateParams, ProductionService, LoadingPopup, toastr, $state) {
        var vm = this;

        var item = $stateParams.item;
        vm.item = JSON.parse(item);
        console.log('item', vm.item);
        vm.updateStatus = updateStatus;
        vm.back = back;
        function updateStatus() {
            var status = vm.item.percentage;
            
            if (status === 100)  {
                var confirmar = confirm('Deseja concluir produção?');
                if (!confirmar) return;
            }
            
            var id = vm.item.id;
            var obj = { percentage: status, id: id };                
            LoadingPopup.show();
            ProductionService.updateStatus(obj).then(onUpdateSuccess, onUpdateFail);

        }
        function onUpdateSuccess(success) {
            if(success.success){
                $state.go('app.production');
                toastr.success('Operação realizada com sucesso!');
            }
            else if(success.error)
                toastr.error('Erro ao realizar sua solicitacao');
                
            LoadingPopup.hide();
        }
        function onUpdateFail(success) {
            console.log('success', success);
            LoadingPopup.hide();
            toastr.error('Erro ao realizar sua solicitacao');

        }
        function back() {
            $state.go('app.production');
        }
    }

})(angular);