/* global angular*/
(function (angular) {
    angular.module('services.productionService', [])
        .service('ProductionService', ProductionService);
    ProductionService.$inject = ['$q', '$http', 'ConstantsService', 'AuthService'];

    function ProductionService($q, $http, ConstantsService, AuthService) {
        return {
            get: getItens,
            order: getDetail,
            updateStatus: updateStatus
        };
        function getItens() {
            var items = [
                {
                    "id_production": 123,
                    "client": "erick wendel",
                    "supplier": "Mariazinha",
                    "delivery_date": "2016-06-13T21:58:44.925Z",
                    "name": "Bolsa do Batman",
                    "percentage_conclusion": 75,
                    "height": 100,
                    "weight": 200.5,
                    "describe": "Quatro vermelhas",
                    
                },
                {
                    "id_production": 124,
                    "client": "Joao",
                    "percentage_conclusion": 50,
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
                    "percentage_conclusion": 0,
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
                    "percentage_conclusion": 75,
                    "delivery_date": "2016-06-13T21:58:44.925Z",
                    "name": "Bolsa do Homem Aranha",
                    "height": 100,
                    "weight": 200.5,
                    "describe": "Quatro vermelhas"
                },
                {
                    "id_production": 312,
                    "client": "erick wendel",
                    "percentage_conclusion": 50,
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
                    "percentage_conclusion": 75,
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
            
            // return $http({
            //     method: 'GET',
            //     url: ConstantsService.GET_PRODUCTION_URL,
            //     headers: AuthService.headers()
            // }).then(function (params) {
            //     return params.data;
            // });
        }
        
        function getDetail(id) {

            var deferred = $q.defer();
            getItens().then(function (items) {
                var item = items.filter(function (item) { return item.id_production === id; })[0];
                deferred.resolve(item);
            });
            return deferred.promise;

        }
         
        function updateStatus(obj) {
           return $http({
                method: 'POST',
                url: ConstantsService.UPDATE_STATUS_PRODUCTION,
                data: obj,
                headers: AuthService.headers()
            }).then(function (params) {
                
                return params.data;
            });
        }
    }



})(angular);