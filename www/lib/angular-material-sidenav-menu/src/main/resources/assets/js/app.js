var module = angular.module('App', ['ngMaterial', 'ngMenuSidenav']);

module.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.index = 0;

    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);