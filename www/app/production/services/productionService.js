/* global angular*/
(function (angular) {
    angular.module('services.productionService', [])
        .service('ProductionService', ProductionService);
    ProductionService.$inject = ['$q', '$http', 'ConstantsService', 'AuthService'];

    function ProductionService($q, $http, ConstantsService, AuthService) {
        return {
            get: getItens,
            updateStatus: updateStatus
        };
        function getItens() {
             
            return $http({
                method: 'GET',
                url: ConstantsService.GET_PRODUCTION_URL,
                headers: AuthService.headers()
            }).then(function (params) {
                return params.data;
            });
        }
        
         
        function updateStatus(obj) {
           return $http({
                method: 'PUT',
                url: ConstantsService.UPDATE_STATUS_PRODUCTION,
                data: obj,
                headers: AuthService.headers()
            }).then(function (params) {
                
                return params.data;
            });
        }
    }



})(angular);