(function () {
    'user strict';
    angular.module('controllers.providerController', [])
        .controller('ProviderCtrl', ProviderCtrl);
        
    ProviderCtrl.$inject = ['$state', '$timeout', '$stateParams', 'LocalStorageService'];
    function ProviderCtrl($state, $timeout, $stateParams, LocalStorageService) {
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

    }
})();