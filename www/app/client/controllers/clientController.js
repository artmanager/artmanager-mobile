
(function (angular) {
	var app = angular.module('controllers.clientController', ['ngSanitize']);

	ClientController.$inject = ['$timeout', 'ClientService', 'LoadingPopup', '$state', 'toastr'];
	app.controller('ClientCtrl', ClientController);

	function ClientController($timeout, ClientService, LoadingPopup, $state, toastr) {
		var vm = this;
        vm.isFormUser = true;
        vm.isFormLocation = false;
        
        var phoneTypes = [{ id: 1, description: 'FIXO' }, { id: 2, description: 'CELULAR' }];
        var clientName = $state.params.clientName;
        console.log('clientName', clientName);
        vm.phoneTypes = phoneTypes;
        vm.user = {}; 
        vm.user.client = {};
        vm.user.phone = [];
        if(clientName) {
            vm.user.client.name = clientName;
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
        
        function onCreate (response) {
            LoadingPopup.hide();
            toastr.success("Cliente cadastrado com sucesso");
            if(vm.user.client.name) {
                localStorage.clientName = vm.user.client.name; 
                $state.go('app.createOrder');
                return;
            }
            
            localStorage.clientName = null; 
            $state.go('app.orders');
        }
        function onFail (response) {
            LoadingPopup.hide();
        }
	}


})(angular);   