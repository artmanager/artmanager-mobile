/* global angular */
(function () {
    'use strict';
    var app = angular.module('services.userService', []);

    app.service('UserService', ['$http', '$q', 'ConstantsService', function ($http, $q, ConstantsService) {
        return {
            create: create,
            get : get
            
        };

        function create(user) {
            return $http.post(ConstantsService.CREATE_USER_URL, user)
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
        function get () {
            return $http.get(ConstantsService.GET_CLIENT_URL).then(function (data){
               return data; 
            });
        }
    }]);
    


})();