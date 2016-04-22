/* global angular */
(function () {
    'use strict';
    angular.module('services.providerService', [])
        .service('ProviderService', ProviderService);
        
    ProviderService.$inject = ['$http', '$q', 'ConstantsService', 'toastr'];
    function ProviderService($http, $q, ConstantsService, toastr) {
        return {
            create: create,
            get: get

        };

        function create(user) {
            return $http.post(ConstantsService.CREATE_PROVIDER_URL, user)
                .then(function (obj) {
                    if (obj.data.erro === undefined) {
                        toastr.success('Cadastro efetuado com sucesso.');
                        return true;
                    }
                    else {
                        toastr.error("Erro ao cadastrar fornecedor");
                        return false;
                    }
                    
                });
        }
        function get() {
            return $http.get(ConstantsService.GET_PROVIDER_URL).then(function (data) {
                return data;
            });
        }
    }



})();