(function () {
	var app = angular.module('controllers.userController', ['ngSanitize']);

	app.controller('UserCtrl', ['$scope','$rootScope', '$timeout',  'UserService', function ($scope, $rootScope, $timeout, UserService) {
		$scope.countPhone 		= 1;
		$scope.countLocation 	= 1;
		$scope.isFormUser 		= true;
		$scope.isFormContato 	= false;
		$scope.isFormEndereco 	= false;
		$scope.user = {
			telefone: [],
			endereco:[]
		};

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

		// var newFildPhone = function () {
		// 	$scope.countPhone ++;
		// 	var templateTelefone = 
		// 	"<ion-md-input "+ 
		// 		"ng-model='user.telefone["+ $scope.countPhone+"].numero' "+ 
		// 		"name='telefone' "+  
		// 		"placeholder='Telefone Adicional (opcional)' "+ 
		// 		"highlight-color=energized " +
		// 		"type=text "+ 
		// 		"ng-required=false> " +
		// 	"</ion-md-input> ";
		// 	return templateTelefone;
		// }




		$scope.login = function (user ) {
			UserService.Create(user);
		};
		var disableAll = function () {
			
			$scope.isFormUser = false;
			$scope.isFormContato = false;
			$scope.isFormEndereco = false;

		};
		$scope.nextContato = function () {
			disableAll();
			$scope.isFormContato = true;

		};
		$scope.nextEndereco = function () {
			disableAll();
			$scope.isFormEndereco = true;
		};
		

    }]);
})();   