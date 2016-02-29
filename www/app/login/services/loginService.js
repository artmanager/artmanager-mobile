(function () {
    'use strict';
    var app = angular.module('services.loginService', []);

    app.service('LoginService', ['$resource', 'ConstantsService', function ($resource, ConstantsService) {
        return {
            login: login,
            logout: logout
        };
        function logout () {
            
        }
        function login(user) {

            var Login =  $resource(ConstantsService.LOGIN_URL, user);
            Login.save(function (token) {
                debugger;
            });
                // if (obj.data.erro != undefined) {
                //     alert(obj.data.erro);
                // }
                // else
                //     return obj.data.token;
            // });

        } 
    }]);
})();