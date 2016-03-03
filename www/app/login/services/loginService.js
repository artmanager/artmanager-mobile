(function () {
    'use strict';
    angular.module('services.loginService', [])
        .service('LoginService', LoginService);
    LoginService.$inject = [ '$http', '$resource', 'ConstantsService'];

    function LoginService( $http, $resource, ConstantsService) {
        return {
            login: login,
            logout: logout
        };
        function logout() {

        }
        function login(user) {
            return $http.post(ConstantsService.LOGIN_URL, user).then(function name(params) {
                return params.data;
             }); 
            
            //  var Login = $resource(ConstantsService.LOGIN_URL + "/data", user);
            // Login.save(function (token) {
            //     console.log(token);
            // });

        }
    }
})();