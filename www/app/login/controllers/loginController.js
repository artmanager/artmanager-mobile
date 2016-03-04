(function () {
    'user strict';
    angular.module('controllers.loginController', [])
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state', 'LoginService', 'LocalStorageService', 'UtilService', 'toastr'];

    function LoginCtrl($state, LoginService, LocalStorageService, UtilService, toastr) {
        var vm = this;

        vm.user = { 'name': '', 'password': '' };

        vm.login = function (user) {
            var data = { 'data': btoa(vm.user.name + "-" + vm.user.password) };
            LoginService.login(data)
                .then(onSuccess, onError);
        };
        
        
        function onSuccess(token) {
            console.log('token', token);
            if (token.erro) {
                toastr.error('Usuario ou senha inválidos.', 'Autenticação');
                return;
            }

            LocalStorageService.set('token', token);
            UtilService.removeCSS("app/login/login.css");
            $state.go('app.orders');

        }
        function onError() {
            toastr.error('Não foi possivel conectar ao servidor.', 'Erro!');
        }
    }
})();