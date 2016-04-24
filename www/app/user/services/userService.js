/* global angular */
(function () {
    'use strict';
    angular.module('services.userService', [])
        .service('UserService', UserService);

    UserService.$inject = ['$http', '$q', 'ConstantsService',  'AuthService'];
    function UserService($http, $q, ConstantsService, AuthService) {
        return {
            create: create,
            get: get

        };
        
        function create(user) {
            return $http({
                    method: 'POST',
                    url: ConstantsService.CREATE_USER_URL,
                    data: user,
                    headers: AuthService.headers()
                })
                .then(function (obj) {
                    if (obj.data.erro === undefined) {
                        alert('Cadastro efetuado com sucesso.');
                        return true;
                    }
                    else {
                        alert(obj.data.erro);
                        return false;
                    }
                });
        }
        function get() {
            return $http.get(ConstantsService.GET_CLIENT_URL, {
                headers: AuthService.headers()
            }).then(function (data) {
                return data;
            });
        }
    }



})();