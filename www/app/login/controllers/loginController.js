(function () {
    'user strict';
    angular.module('controllers.loginController', [])
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state', 'LoginService', 'LocalStorageService', 'UtilService', 'toastr', 'LoadingPopup'];

    function LoginCtrl($state,LoginService, LocalStorageService, UtilService, toastr, LoadingPopup) {
        var vm = this;


        vm.user = { 'name': '', 'password': '' };

        vm.login = function (user) {
            var data = { "data": btoa(vm.user.name + "-" + vm.user.password) };
        
            LoadingPopup.show();
            LoginService.login(data)
                .then(onSuccess, onError);
        };


        function onSuccess(token) {
            LoadingPopup.hide();
            if (token.error) {
                toastr.error('Usuario ou senha inválidos.', 'Autenticação');
                return;
            }
            UtilService.removeCSS("app/login/login.css");
            console.log('token', token);
            LoginService.setAuthToken(token);
            $state.go('app.ordersProduction');

        }
        function onError() {
            LoadingPopup.hide();
            toastr.error('Não foi possivel conectar ao servidor.', 'Erro!');
        }
    }
})();