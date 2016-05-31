(function () {
    'user strict';
    angular.module('controllers.loginController', [])
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state', 'LoginService', 'LocalStorageService', 'UtilService', 'toastr', 'LoadingPopup'];

    function LoginCtrl($state, LoginService, LocalStorageService, UtilService, toastr, LoadingPopup) {
        var vm = this;


        vm.user = { 'name': '', 'password': '' };
        vm.isFormPassword = false;
        vm.showFormPassword = showFormPassword;
        vm.showLogin = showLogin;
        vm.sendPassword = sendPassword;

        vm.login = function (user) {
            var data = { "data": btoa(vm.user.name + "-" + vm.user.password) };

            LoadingPopup.show();
            LoginService.login(data)
                .then(onSuccess, onError);
        };

        function showLogin() {
            vm.isFormPassword = false;

        }
        function showFormPassword() {
            vm.isFormPassword = true;
        }

        function sendPassword() {
            var obj = { user: vm.user.email };
            LoadingPopup.show();
            LoginService.resendPassword(obj)
                .then(onResendSuccess, onResendError);
        }

        function onResendSuccess(result) {
            LoadingPopup.hide();
            
            if (result.error)
                toastr.error(result.success.error);
            else if (result.success)
                toastr.success('Um email foi encaminhado para redefinição de senha');

            console.log('success', result);
        }
        function onResendError(result) {
            LoadingPopup.hide();
            toastr.error('Erro ao realizar sua solicitação');
            console.log('error', result);

        }


        function onSuccess(token) {
            LoadingPopup.hide();
            if (token.error) {
                toastr.error('Usuario ou senha inválidos.', 'Autenticação');
                return;
            }
            UtilService.removeCSS("app/login/login.css");
            console.log('token', token);
            LoginService.setAuthToken(token);
            $state.go('app.production');

        }

        function onError() {
            LoadingPopup.hide();
            toastr.error('Não foi possivel conectar ao servidor.', 'Erro!');
        }
    }
})();