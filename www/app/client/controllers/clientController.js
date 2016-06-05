
(function (angular) {
    var app = angular.module('controllers.clientController', ['ngSanitize']);

    ClientController.$inject = ['$timeout', 'ClientService', 'LoadingPopup', '$state', 'toastr'];
    app.controller('ClientCtrl', ClientController);

    function ClientController($timeout, ClientService, LoadingPopup, $state, toastr) {
        var vm = this;
        vm.isFormUser = true;
        vm.isFormLocation = false;
        
        var phoneTypes = [{ id: 1, description: 'FIXO' }, { id: 2, description: 'CELULAR' }];
        
        vm.param = { clientName: $state.params.clientName };
        console.log('clientName', vm.param.clientName);
        vm.phoneTypes = phoneTypes;
        resetFields();
        
        if (vm.param.clientName) {
            vm.user.client.name = vm.param.clientName;
        }

        vm.create = function () {
            LoadingPopup.show();
            ClientService.create(vm.user).then(onCreate, onFail);

        };

        vm.nextContato = function () {
            disableAll();
            vm.isFormContact = true;

        };
        vm.nextLocation = function () {
            disableAll();
            vm.isFormLocation = true;
        };
        vm.goBack = function (form) {
            disableAll();
            switch (form) {

                case 'user':
                    vm.isFormUser = true;
                    break;

                default:
                    vm.isFormContato = true;
                    break;
            }
        };

        var disableAll = function () {
            vm.isFormUser = false;
            vm.isFormLocation = false;
        };
        function resetFields() {
            vm.user = {};
            vm.user.client = {};
            vm.user.phone = [];
        }
        function onCreate(response) {
            LoadingPopup.hide();
            toastr.success("Cliente cadastrado com sucesso");
            if (vm.param.clientName) {
                localStorage.clientName = vm.user.client.name;
                $state.go('app.createOrder');
                return;
            }

            localStorage.clientName = "";
            // $state.go('app.orders');
            resetFields();
            vm.param.clientName = undefined;
            document.getElementById("name").focus();
        }
        function onFail(response) {
            LoadingPopup.hide();
        }
    }


})(angular);   