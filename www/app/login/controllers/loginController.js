(function () {
    'user strict';
    angular.module('controllers.loginController', [])
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state', 'httpRequestInterceptor', 'LoginService', 'LocalStorageService', 'UtilService', 'toastr', 'LoadingPopup'];

    function LoginCtrl($state, httpRequestInterceptor, LoginService, LocalStorageService, UtilService, toastr, LoadingPopup) {
        var vm = this;


        vm.user = { 'name': '', 'password': '' };

        vm.login = function (user) {
            var data = { "data": btoa(vm.user.name + "-" + vm.user.password) };
        
            LoadingPopup.show();
            LoginService.login(JSON.stringify(data))
                .then(onSuccess, onError);
        };


        function onSuccess(token) {
            LoadingPopup.hide();
            if (token.erro) {
                toastr.error('Usuario ou senha inválidos.', 'Autenticação');
                return;
            }
            UtilService.removeCSS("app/login/login.css");
            LoginService.setAuthToken(token);
            $state.go('app.orders');

        }
        function onError() {
            LoadingPopup.hide();
            toastr.error('Não foi possivel conectar ao servidor.', 'Erro!');
        }
    }
})();