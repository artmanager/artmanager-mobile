(function () {
    'use strict';
    var app = angular.module('controllers.appController', []);
    //VERMELHO = 15
    //AMARELO - 15 - 45
    //VERDE - 45 >
    app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout, $rootScope, $mdSidenav) {

        $scope.index = 0;

        this.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };
         this.topDirections = ['left', 'up'];
        this.bottomDirections = ['down', 'right'];
        this.isOpen = false;
        this.availableModes = ['md-fling', 'md-scale'];
        this.selectedMode = 'md-fling';
        this.availableDirections = ['up', 'down', 'left', 'right'];
        this.selectedDirection = 'up';
    });
})()