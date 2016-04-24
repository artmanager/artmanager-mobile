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
                    return obj.data;
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