(function () {
    'use strict';
    var app = angular.module('controllers.appController', []);
    //VERMELHO = 15
    //AMARELO - 15 - 45
    //VERDE - 45 >
    app.controller('AppCtrl', function ($ionicModal, $ionicPopover, $state, $rootScope, $mdSidenav) {
        var vm = this;
        vm.index = 0;

        vm.menu = [{
            link: 'status',
            title: 'Status',
            icon: 'action:dashboard'
        }, {
                link: 'contacts',
                title: 'Contacts',
                icon: 'communication:contacts'
            }];

        vm.admin = [{
            link: 'settings',
            title: 'Settings',
            icon: 'action:settings'
        }, {
                link: 'help',
                title: 'Help',
                icon: 'action:help'
            }];

        vm.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };
        vm.openSidenav = function (menuId) {
            $mdSidenav(menuId).open();
        };
        vm.closeSidenav = function (menuId) {
            $mdSidenav(menuId).close();
        };

        vm.currentTitle = function () {
            return $state.current.title;
        };
        vm.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };
        vm.topDirections = ['left', 'up'];
        vm.bottomDirections = ['down', 'right'];
        vm.isOpen = false;
        vm.availableModes = ['md-fling', 'md-scale'];
        vm.selectedMode = 'md-fling';
        vm.availableDirections = ['up', 'down', 'left', 'right'];
        vm.selectedDirection = 'up';
    });
})()