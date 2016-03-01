(function () {
    'use strict';
    angular.module('services.loginService', [])
        .service('LoginService', LoginService);
    LoginService.$inject = ['$resource', 'ConstantsService'];

    function LoginService($resource, ConstantsService) {
        return {
            login: login,
            logout: logout
        };
        function logout() {

        }
        function login(user) {

            var Login = $resource(ConstantsService.LOGIN_URL, user);
            Login.save(function (token) {

            });
            // if (obj.data.erro != undefined) {
            //     alert(obj.data.erro);
            // }
            // else
            //     return obj.data.token;
            // });

        }
    }
})();