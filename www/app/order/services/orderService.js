/* global angular*/
(function (angular) {
    angular.module('services.orderService', [])
        .service('OrderService', OrderService);
    OrderService.$inject = ['$q', '$http', 'ConstantsService', 'AuthService'];

    function OrderService($q, $http, ConstantsService, AuthService) {
        return {
            create: create,
            get: getItens,
            updateStatus: updateStatus
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

        function getItens() {
            return $http({
                method: 'GET',
                url: ConstantsService.GET_ORDER_URL,
                headers: AuthService.headers()
            }).then(function (params) {
                return params.data;
            });


        }

        function updateStatus(data) {
            return $http({
                method: 'PUT',
                url: ConstantsService.UPDATE_PRODUCTION_STATUS,
                data: data,
                headers: AuthService.headers()
            }).then(function (params) {
                return params.data;
            });
        }
    }



})(angular);