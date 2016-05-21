/* global angular */
(function () {
    'use strict';
    angular.module('services.providerService', [])
        .service('ProviderService', ProviderService);
        
    ProviderService.$inject = ['$http', '$q', 'ConstantsService', 'toastr', 'AuthService'];
    function ProviderService($http, $q, ConstantsService, toastr, AuthService) {
        return {
            create: create,
            get: get

        };

        function create(user) {
           return $http({
                    method: 'POST',
                    url: ConstantsService.CREATE_PROVIDER_URL,
                    data: user,
                    headers: AuthService.headers()
                })
                .then(function (obj) {
                    return obj.data;
                    
                });
        }
        function get() {
            return $http.get(ConstantsService.GET_PROVIDER_URL, {
                headers: AuthService.headers()
            }).then(function (data) {
                return data;
            });
        }
    }



})();