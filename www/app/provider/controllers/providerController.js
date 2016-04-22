(function () {
    'user strict';
    angular.module('controllers.providerController', [])
        .controller('ProviderCtrl', ProviderCtrl);

    ProviderCtrl.$inject = ['$state', '$timeout', '$stateParams', 'LocalStorageService', 'ProviderService', 'LoadingPopup'];
    function ProviderCtrl($state, $timeout, $stateParams, LocalStorageService, ProviderService, LoadingPopup) {
        var vm = this;

        var defaultContent = { personalData: true, location: false };
        var phoneTypes = [{ id: 1, description: 'FIXO' }, { id: 3, description: 'CELULAR' }];
        vm.phoneTypes = phoneTypes;
        vm.content = defaultContent;
        
        vm.toggleForm = function () {

            vm.content.personalData = false;
            vm.content.location = true;
        };
        vm.create = function () {
            LoadingPopup.show();
            ProviderService.create(vm.provider).then(onCreate, onFail);
            // alert(JSON.stringify(vm.provider));
        };


        vm.goBack = function () {
            vm.content.personalData = true;
            vm.content.location = false;
        };
        function onCreate () {
            LoadingPopup.hide();
        }
        function onFail () {
            LoadingPopup.hide();
        }
    }
})();