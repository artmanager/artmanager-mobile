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

        function getItens(obj) {
            var itens = [{
                "id": "1212323323232113223321",
                "creationDate": "2016-05-13T21:58:44.925Z",
                "user": { "name": "erick wendel" },
                "client": { "name": "gustavo" },
                "order": {
                    "products": [{
                        "id_production": 123,
                        "supplier": "Mariazinha",
                        "delivery_date": "2016-05-13T21:58:44.925Z",
                        "name": "Bolsa do Batman",
                        "height": 100,
                        "weight": 200.5,
                        "quantity": 6,
                        "describe": "Quatro vermelhas",
                        "produzido": "100% ou 0%"
                    }],
                    "discount": 5.5,
                    "entrance": 11.00,
                    "total": 65.00
                }
            }, 
            {
                "id": "1212323323232113223321",
                "creationDate": "2016-04-15T21:58:44.925Z",
                "user": { "name": "jose fernando" },
                "client": { "name": "maria" },
                "order": {
                    "products": [{
                        "id_production": 321,
                        "supplier": "Joana Maria",
                        "delivery_date": "2016-06-13T21:58:44.925Z",
                        "name": "Bolsa do Homem Aranha",
                        "height": 200,
                        "weight": 300.5,
                        "quantity": 2,
                        "describe": "Duas Cinzas vermelhas",
                        "produzido": "100"
                    }],
                    "entrance": 65.00,
                    "total": 65.00
                }
            }];

            var defer = $q.defer();
            defer.resolve({'success': itens});
            return defer.promise;
            // return $http({
            //     method: 'GET',
            //     data: obj,
            //     url: ConstantsService.GET_ORDER_URL,
            //     headers: AuthService.headers()
            // }).then(function (params) {
            //     return params.data;
            // });


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