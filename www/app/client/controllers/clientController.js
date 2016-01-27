(function (angular) {
	var app = angular.module('controllers.clientController', ['ngSanitize']);

	app.controller('ClientCtrl', ['$scope','$rootScope', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk', 'ClientService', function ($scope, $rootScope, $timeout, ionicMaterialMotion, ionicMaterialInk, ClientService) {
		
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
		//---------------------------------------------------------
		// Set Header
	    $scope.$parent.showHeader();
	    $scope.$parent.clearFabs();
	    $scope.$parent.setHeaderFab('left');

	    // Delay expansion
	    $timeout(function() {
	        $scope.isExpanded = true;
	    }, 300);

	    // Set Motion
	    ionicMaterialMotion.fadeSlideInRight();

	    // Set Ink
	    ionicMaterialInk.displayEffect();
		}]);


})(angular);   