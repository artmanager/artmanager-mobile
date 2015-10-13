(function () {
	var app = angular.module('controllers.userController', []);
	app.controller('UserCtrl', ['$scope', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk', function ($scope, $timeout, ionicMaterialMotion, ionicMaterialInk) {

		$scope.isFormUser = true;
		$scope.isFormContato = false;
		$scope.isFormEndereco = false;

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