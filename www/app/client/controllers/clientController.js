
(function (angular) {
	var app = angular.module('controllers.clientController', ['ngSanitize']);

	ClientController.$inject = ['$timeout', 'ClientService', 'LoadingPopup', '$state'];
	app.controller('ClientCtrl', ClientController);

	function ClientController($timeout, ClientService, LoadingPopup, $state) {
		var vm = this;
        vm.isFormUser = true;
        vm.isFormLocation = false;
        
        var phoneTypes = [{ id: 1, description: 'FIXO' }, { id: 3, description: 'CELULAR' }];
        var clientName = $state.params.clientName;
        console.log('clientName', clientName);
        vm.phoneTypes = phoneTypes;
        vm.user = {}; 
        vm.user.client = {};
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
        
        function onCreate () {
            LoadingPopup.hide();
        }
        function onFail () {
            LoadingPopup.hide();
        }
	}


})(angular);   