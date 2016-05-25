/* global angular*/
(function (angular) {
    angular.module('services.orderService', [])
        .service('OrderService', OrderService);
    OrderService.$inject = ['$q', '$http', 'ConstantsService', 'AuthService'];

    function OrderService($q, $http, ConstantsService, AuthService) {
        return {
            create: create,
            get: getItens
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
            // var defer = $q.defer();
            // var itens = [{
            //     "id": "1212323323232113223321",
            //     "creationDate": "2016-05-13T21:58:44.925Z",
            //     "user": {
            //         "name": "erick wendel"
            //     },
            //     "client": {
            //         "name": "gustavo"
            //     },
            //     "order": {
            //         "products": [{
            //             "id_production": 123,
            //             "supplier": "Mariazinha",
            //             "delivery_date": "2016-05-13T21:58:44.925Z",
            //             "name": "Bolsa do Batman",
            //             "height": 100,
            //             "weight": 200.5,
            //             "quantity": 6,
            //             "describe": "Quatro verdes",
            //             "percentage_conclusion": "100"
            //         },
            //         // {
            //         //     "id_production": 123,
            //         //     "supplier": "Tia Josefa",
            //         //     "delivery_date": "2016-05-13T21:58:44.925Z",
            //         //     "name": "Bolsa do Batman",
            //         //     "height": 100,
            //         //     "weight": 200.5,
            //         //     "quantity": 6,
            //         //     "describe": "Quatro vermelhas",
            //         //     "percentage_conclusion": "50"
            //         // }
            //         ],
            //         "discount": 5.5,
            //         "entrance": 11.00,
            //         "total": 65.00
            //     }
            // }];
            // defer.resolve(itens);

            // return defer.promise;


        }

    }



})(angular);