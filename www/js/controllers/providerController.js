(function (){
	'user strict';
	var app = angular.module('controllers.providerController', []);

	app.controller('ProviderCtrl', ['$scope','$state' , '$timeout', '$stateParams', 'ionicMaterialInk', 'ionicMaterialMotion', 'LocalStorageService', 
		function($scope, $state, $timeout, $stateParams, ionicMaterialInk, ionicMaterialMotion, LocalStorageService) {
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

		    $scope.create = function (user) {
		    	$scope.dados = user;
		    	alert(JSON.stringify(user))
		    }

		}]);
})()