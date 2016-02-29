(function (angular) {
	var app = angular.module('controllers.clientController', ['ngSanitize']);
 
	app.controller('ClientCtrl', ['$scope','$rootScope', '$timeout', 'ClientService', function ($scope, $rootScope, $timeout,  ClientService) {
		
        $scope.countPhone 		= 1;
		$scope.countLocation 	= 1
		$scope.isFormUser 		= true;
		$scope.isFormContato 	= false;
		$scope.isFormEndereco 	= false;
		$scope.user = {
			telefone: [],
			endereco:[]
		}

	
		$scope.login = function (user ) {
			ClientService.create(user);
		}
		
		var disableAll = function () {
			
			$scope.isFormUser = false;
			$scope.isFormContato = false;
			$scope.isFormEndereco = false;

		}
		$scope.nextContato = function () {
			disableAll();
			$scope.isFormContato = true;

		}
		$scope.nextEndereco = function () {
			disableAll();
			$scope.isFormEndereco = true;
		}

		}]);


})(angular);   