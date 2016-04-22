(function (angular) {
	var app = angular.module('controllers.clientController', ['ngSanitize']);

	ClientController.$inject = ['$timeout', 'ClientService', 'LoadingPopup'];
	app.controller('ClientCtrl', ClientController);

	function ClientController($timeout, ClientService, LoadingPopup) {
		var vm = this;
        vm.isFormUser = true;
        vm.isFormLocation = false;
        
        var phoneTypes = [{ id: 1, description: 'FIXO' }, { id: 3, description: 'CELULAR' }];
        vm.phoneTypes = phoneTypes;
        
        vm.user = {
            phone: [],
            name: '',
            number: '',
            district: '',
            postalCode: '',
            city: '',
            state: ''

        };

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