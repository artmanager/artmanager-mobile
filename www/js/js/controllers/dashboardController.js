(function () {
	var app = angular.module('controllers.dashboardController', []);
	app.controller('DashboardCtrl', ['$scope', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk', function ($scope, $timeout, ionicMaterialMotion, ionicMaterialInk) {
		console.log('dash controller');
		// Set Header
	    $scope.$parent.showHeader();
	    $scope.$parent.clearFabs();
	    $scope.$parent.setHeaderFab('left');

	    // Delay expansion
	    $timeout(function() {
	        $scope.isExpanded = true;
	        // $scope.$parent.setExpanded(true);
	    }, 300);

	    // Set Motion
	    ionicMaterialMotion.fadeSlideInRight();

	    // Set Ink
	    ionicMaterialInk.displayEffect();
		}]);
})();   