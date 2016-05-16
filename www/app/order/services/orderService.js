/* global angular*/
(function (angular) {
    angular.module('services.orderService', [])
        .service('OrderService', ProductionService);
    ProductionService.$inject = ['$q', '$http', 'ConstantsService', 'AuthService'];

    function ProductionService($q, $http, ConstantsService, AuthService) {
        return {
            create: create
        };
        function create(order) {
            return $http({
                method: 'POST',
                url: ConstantsService.CREATE_ORDER_URL,
                data: order,
                headers: AuthService.headers()
            }).then(function (params) {
                return params.data;
            });
        }
        
        
    }



})(angular);