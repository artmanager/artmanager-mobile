(function () {
    'user strict';
    var app = angular.module('controllers.providerController', []);

    app.controller('ProviderCtrl', ['$state', '$timeout', '$stateParams', 'LocalStorageService',
        function ($state, $timeout, $stateParams, LocalStorageService) {
            var vm = this;
            
            var defaultContent = { personalData: true, location: false };
            vm.content = defaultContent;

            vm.toggleForm = function () {
                
                vm.content.personalData = false;
                vm.content.location = true;
            };
            vm.create = function () {
                
                alert(JSON.stringify(vm.provider));
            };
            
            
            vm.goBack = function () {
                vm.content.personalData = true;
                vm.content.location = false;
            };

        }]);
})();