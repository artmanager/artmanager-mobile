/* global angular*/
(function (angular) {
    angular.module('services.productionService', [])
        .service('ProductionService', OrderService);
    OrderService.$inject = ['$q', '$http', 'ConstantsService', 'AuthService'];

    function OrderService($q, $http, ConstantsService, AuthService) {
        return {
            get: getItens,
            order: getDetail,
            create: create
        };
        function getItens() {
            var items = [
                {
                    "id_production": 123,
                    "client": "erick wendel",
                    "supplier": "Mariazinha",
                    "delivery_date": "2016-06-13T21:58:44.925Z",
                    "name": "Bolsa do Batman",
                    "height": 100,
                    "weight": 200.5,
                    "describe": "Quatro vermelhas"
                },
                {
                    "id_production": 124,
                    "client": "Joao",
                    "supplier": "Joaozinho",
                    "delivery_date": "2016-10-16T21:58:44.925Z",
                    "name": "Bolsa do Homem Aranha",
                    "height": 100,
                    "weight": 200.5,
                    "describe": "Quatro vermelhas"
                },
                {
                    "id_production": 543,
                    "client": "erick wendel",
                    "supplier": "Mariazinha",
                    "delivery_date": "2016-10-13T21:58:44.925Z",
                    "name": "Bolsa do Batman",
                    "height": 100,
                    "weight": 200.5,
                    "describe": "Quatro vermelhas"
                },
                {
                    "id_production": 345,
                    "client": "Joao",
                    "supplier": "Joaozinho",
                    "delivery_date": "2016-06-13T21:58:44.925Z",
                    "name": "Bolsa do Homem Aranha",
                    "height": 100,
                    "weight": 200.5,
                    "describe": "Quatro vermelhas"
                },
                {
                    "id_production": 312,
                    "client": "erick wendel",
                    "supplier": "Mariazinha",
                    "delivery_date": "2016-05-13T21:58:44.925Z",
                    "name": "Bolsa do Batman",
                    "height": 100,
                    "weight": 200.5,
                    "describe": "Quatro vermelhas"
                },
                {
                    "id_production": 321,
                    "client": "Joao",
                    "supplier": "Joaozinho",
                    "delivery_date": "2016-05-13T21:58:44.925Z",
                    "name": "Bolsa do Homem Aranha",
                    "height": 100,
                    "weight": 200.5,
                    "describe": "Quatro vermelhas"
                },

            ];
            
            var defer = $q.defer();
            defer.resolve(items);

            return defer.promise;
        }
        
        function getDetail(id) {

            var deferred = $q.defer();
            getItens().then(function (items) {
                var item = items.filter(function (item) { return item.id_production === id; })[0];
                deferred.resolve(item);
            });
            return deferred.promise;

        }
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