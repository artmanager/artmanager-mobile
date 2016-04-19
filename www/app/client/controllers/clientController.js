(function (angular) {
	var app = angular.module('controllers.clientController', ['ngSanitize']);

	ClientController.$inject = ['$timeout', 'ClientService']
	app.controller('ClientCtrl', ClientController);

	function ClientController($timeout, ClientService) {
		var vm = this;
        vm.isFormUser = true;
        vm.isFormContact = false;
        vm.isFormLocation = false;

        vm.profiles = [{ id: 0, description: 'Administrador' }, { id: 1, description: 'Usuario' }];

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
            alert(vm.user);
            UserService.Create(vm.user);
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
                case 'contact':
                    vm.isFormContact = true;
                    break;
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
            vm.isFormContact = false;
            vm.isFormLocation = false;

        };
	}


})(angular);   