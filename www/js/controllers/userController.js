(function () {
	var app = angular.module('controllers.userController', ['ngSanitize']);

	app.controller('UserCtrl', ['$scope','$rootScope', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk', 'UserService', function ($scope, $rootScope, $timeout, ionicMaterialMotion, ionicMaterialInk, UserService) {
		$scope.countPhone 		= 1;
		$scope.countLocation 	= 1
		$scope.isFormUser 		= true;
		$scope.isFormContato 	= false;
		$scope.isFormEndereco 	= false;
		$scope.user = {
			telefone: [],
			endereco:[]
		}

		// $scope.$watch('isFormContato', function (value) {
		// debugger;
		// $rootScope.fabOptionVisible = true;
		// 	alert('a')
		// });
		// $scope.$watch('isFormEndereco', function (value) {

		// 	alert('a')

		// })
		// (function() {
		// 	document.getElementById('fab-options')
  //       	.addEventListener('click', function() {
        		
  //       	});
		// });

		var newFildPhone = function () {
			$scope.countPhone ++;
			var templateTelefone = 
			"<ion-md-input "+ 
				"ng-model='user.telefone["+ $scope.countPhone+"].numero' "+ 
				"name='telefone' "+  
				"placeholder='Telefone Adicional (opcional)' "+ 
				"highlight-color=energized " +
				"type=text "+ 
				"ng-required=false> " +
			"</ion-md-input> ";
			return templateTelefone;
		}




		$scope.login = function (user ) {
			
			alert(JSON.stringify(user));
			UserService.Create(user);
			
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


})();   