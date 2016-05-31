(function () {
    'use strict';
    angular.module('services.loginService', [])
        .service('LoginService', LoginService);
    LoginService.$inject = [ '$http', '$resource', 'ConstantsService'];

    function LoginService( $http, $resource, ConstantsService) {
        return {
            login: login,
            logout: logout,
            setAuthToken: setAuthToken,
            resendPassword : resendPassword
            
        };
        function setAuthToken(value) {
            localStorage.token = value.token;
            // console.log($http.defaults.headers.common);
            // $http.defaults.headers.common[ConstantsService.ACCESS_TOKEN_KEY] = value;
        }
        function  killAuthToken() {
            $http.defaults.headers.common[ConstantsService.ACCESS_TOKEN_KEY] = '';
            
        }
        
        function logout() {
            killAuthToken();
        }
        function login(user) {
            console.log(user);
            return $http.post(ConstantsService.LOGIN_URL, user)
                    .then(function name(params) {
                        return params.data;
                    }); 
            
            //  var Login = $resource(ConstantsService.LOGIN_URL + "/data", user);
            // Login.save(function (token) {
            //     console.log(token);
            // });

        }
        function  resendPassword(obj) {
            return $http({
                method: 'POST',
                url: ConstantsService.RESEND_PASSWORD_URL,
                data: obj,
                config: {timeout: 50000}
            }).then(function (params) {
                
                return params.data;
            });
             
            
        }
    }
})();