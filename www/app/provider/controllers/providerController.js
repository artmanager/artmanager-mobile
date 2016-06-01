(function () {
    'user strict';
    angular.module('controllers.providerController', [])
        .controller('ProviderCtrl', ProviderCtrl);

    ProviderCtrl.$inject = ['$state', '$timeout', '$stateParams', 'LocalStorageService', 'ProviderService', 'LoadingPopup', 'toastr'];
    function ProviderCtrl($state, $timeout, $stateParams, LocalStorageService, ProviderService, LoadingPopup, toastr) {
        var vm = this;



        var defaultContent = { personalData: true, location: false };
        var phoneTypes = [{ id: 1, description: 'FIXO' }, { id: 3, description: 'CELULAR' }];
        vm.provider = {};
        vm.provider.phones = [];
        vm.phoneTypes = phoneTypes;
        vm.content = defaultContent;
        vm.itemName = $stateParams.providerName;

        if (vm.itemName)
            vm.provider.name = vm.itemName;

        vm.toggleForm = function () {

            vm.content.personalData = false;
            vm.content.location = true;
        };
        vm.create = function (providerForm) {

            LoadingPopup.show();
            var dados = { 'supplier': vm.provider };
            ProviderService.create(dados).then(onCreate, onFail);
        };


        vm.goBack = function () {
            vm.content.personalData = true;
            vm.content.location = false;
        };
        function onCreate(obj) {

            LoadingPopup.hide();
            console.log('obj', obj);
            if (obj.error !== undefined) {
                toastr.error("Erro ao cadastrar fornecedor", obj.error);
                return;
            }
            toastr.success('Cadastro efetuado com sucesso.');
            if (vm.itemName) {
                localStorage.providerName = vm.provider.name;
                $state.go('app.createProduct', { 'providerName': vm.provider.name });
                return;
            }
            localStorage.providerName = ""; 
            $state.go('app.createOrder');
            vm.provider = {};
        }
        function onFail(obj) {
            LoadingPopup.hide();
        }
    }
})();