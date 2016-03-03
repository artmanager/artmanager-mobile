(function () {
    'user strict';
    angular.module('controllers.loginController', [])
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state', 'LoginService', 'LocalStorageService', 'UtilService'];

    function LoginCtrl($state, LoginService, LocalStorageService, UtilService) {
        var vm = this;

        vm.user = { 'name': '', 'password': '' };

        vm.login = function (user) {
            var data = { 'data': btoa('artmanager' + "-" + 'artmanager') };
            LoginService.login(data)
                .then(function (token) {
                    if (token != null) {
                        LocalStorageService.set('token', token);

                        UtilService.removeCSS("app/login/login.css");
                        // $state.go('app.orders');
                        $state.go('app.createProvider');
                    }

                });
        };


    }
})();