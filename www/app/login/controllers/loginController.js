(function () {
    'user strict';
    angular.module('controllers.loginController', [])
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state', 'httpRequestInterceptor', 'LoginService', 'LocalStorageService', 'UtilService', 'toastr', '$ionicLoading'];

    function LoginCtrl($state, httpRequestInterceptor, LoginService, LocalStorageService, UtilService, toastr, $ionicLoading) {
        var vm = this;

        var showPopup = function () {
            $ionicLoading.show({
                template: '<md-progress-circular md-mode="indeterminate" md-diameter="96"></md-progress-circular>',
                showBackdrop: false,
                hideOnStateChange: true,
                animation: 'fade-in',

            });
        };
        var hidePopup = function () {
            $ionicLoading.hide();
        };

        vm.user = { 'name': '', 'password': '' };

        vm.login = function (user) {
            var data = { 'data': btoa(vm.user.name + "-" + vm.user.password) };
            showPopup();
            onSuccess(data);
            // LoginService.login(data)
            //     .then(onSuccess, onError);
        };


        function onSuccess(token) {
            hidePopup();
            if (token.erro) {
                toastr.error('Usuario ou senha inválidos.', 'Autenticação');
                return;
            }
            UtilService.removeCSS("app/login/login.css");
            LoginService.setAuthToken(token);
            $state.go('app.orders');

        }
        function onError() {
            hidePopup();
            toastr.error('Não foi possivel conectar ao servidor.', 'Erro!');
        }
    }
})();