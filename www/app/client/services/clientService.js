/* global angular */
(function () {
    'use strict';
    angular.module('services.clientService', [])
        .service('ClientService', ClientService);
        
    ClientService.$inject = ['$http', '$q', 'ConstantsService', 'toastr', 'AuthService'];
    function ClientService($http, $q, ConstantsService, toastr, AuthService) {
        return {
            create: create,
            get: get

        };

        function create(user) {
            return $http({
                    method: 'POST',
                    url: ConstantsService.CREATE_CLIENT_URL,
                    data: user,
                    headers: AuthService.headers()
                })
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
            return $http.get(ConstantsService.GET_CLIENT_URL, {
                headers:  AuthService.headers()
            }).then(function (data) {
                return data;
            });
        }
    }



})();