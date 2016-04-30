/* global angular*/
(function (angular) {
    angular.module('services.orderService', [])
        .service('OrderService', OrderService);
    OrderService.$inject = ['$q', '$http', 'ConstantsService', 'AuthService'];

    function OrderService($q, $http, ConstantsService, AuthService) {
        return {
            get: getItens,
            order: getDetail,
            create: create
        };
        function getItens() {

            var items = [{
                "id": "56a936528dfbe664fbc45ae3",
                "status": 0,
                "name": "Antonia",
                "product": "Bolsa de sapo",
                "date": "25/08/2016"
            }, {
                    "id": "56a936522f337a1bc3364dee",
                    "status": 1,
                    "name": "Maria",
                    "product": "Macaco de pelúcia",
                    "date": "01/05/2016"
                }, {
                    "id": "56a936521c8401526a84bb90",
                    "status": 1,
                    "name": "Fernanda",
                    "product": "Camiseta de algodão",
                    "date": "01/06/2016"
                }, {
                    "id": "56a93652f63e2e55bf83c7c3",
                    "status": 0,
                    "name": "Mariana",
                    "product": "Porta treco",
                    "date": "10/07/2016"
                }, {
                    "id": "56a93652dc9b9c485fd7cf56",
                    "status": 1,
                    "name": "Joao",
                    "product": "Enfeite de porta",
                    "date": "22/01/2016"
                }, {
                    "id": "56a9365234e54b222ae70922",
                    "status": 0,
                    "name": "Erick",
                    "product": "Macaco de pelúcia",
                    "date": "20/10/2016"
                }, {
                    "id": "56a936523ba38f84067e4e8a",
                    "status": 1,
                    "name": "Icaro",
                    "product": "Bolsa de sapo",
                    "date": "26/03/2016"
                }, {
                    "id": "56a93652ff4ecd7e2b356dbe",
                    "status": 0,
                    "name": "Gustavo",
                    "product": "Porta moeda",
                    "date": "20/10/2016"
                }, {
                    "id": "56a936528ae346478912bca0",
                    "status": 0,
                    "name": "Gi",
                    "product": "Porta treco",
                    "date": "24/01/2016"
                }, {
                    "id": "56a93652589f72d2035dd6ce",
                    "status": 1,
                    "name": "Renata",
                    "product": "Macaco de pelúcia",
                    "date": "04/09/2016"
                }, {
                    "id": "56a936524cf918945d427e1d",
                    "status": 2,
                    "name": "Grasiela",
                    "product": "Porta treco",
                    "date": "08/09/2016"
                }, {
                    "id": "56a93652f5f88efa83c0e558",
                    "status": 0,
                    "name": "Marta",
                    "product": "Bolsa de sapo",
                    "date": "18/12/2016"
                }, {
                    "id": "56a9365219d220265b4a862f",
                    "status": 0,
                    "name": "Joana",
                    "product": "Macaco de pelúcia",
                    "date": "28/02/2016"
                }, {
                    "id": "56a9365244df10d2fb9786be",
                    "status": 0,
                    "name": "Paula",
                    "product": "Porta treco",
                    "date": "27/06/2016"
                }, {
                    "id": "56a936520828907f186bb7c0",
                    "status": 1,
                    "name": "Gabi",
                    "product": "Porta CD",
                    "date": "01/05/2016"
                }, {
                    "id": "56a93652ff8090e5447c7dda",
                    "status": 2,
                    "name": "Tonia",
                    "product": "Bolsa grande colorida",
                    "date": "01/05/2016"
                }, {
                    "id": "56a936527b0272d0eec9106f",
                    "status": 2,
                    "name": "Dani",
                    "product": "Porta treco",
                    "date": "02/05/2016"
                }, {
                    "id": "56a93652bec658da40e9dc24",
                    "status": 0,
                    "name": "Gabriela",
                    "product": "Macaco de pelúcia",
                    "date": "24/11/2016"
                }, {
                    "id": "56a9365272b5778294ac2218",
                    "status": 2,
                    "name": "Josefina",
                    "product": "Porta treco",
                    "date": "28/01/2016"
                }, {
                    "id": "56a936526d4e8bcbbedee470",
                    "status": 0,
                    "name": "Stuart",
                    "product": "Bolsa de sapo",
                    "date": "01/06/2016"
                }];
            var defer = $q.defer();
            var colors = ['red', 'yellow', 'green'];
            var now = new Date();
            items = items.map(function (params) {
                // hoje - 20 dias > vermelho
                //20 - 40 -> amarelo
                //40 > verde
                var data = params.date.split('/');
                var dataItem = new Date(data[2], (data[1]), data[0]);
                // console.log('data', dataItem.toLocaleDateString());
                var calc = daysBetween(now, dataItem);
                if (calc < 20)
                    params.status = 0;
                else if (calc > 20 && calc < 40)
                    params.status = 1
                else if (calc > 40)
                    params.status = 2;

                
                params.dataUTC = dataItem;
                
                return params;
            });
            defer.resolve(items);

            return defer.promise;
        }
        function treatAsUTC(date) {
            var result = new Date(date);
            result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
            return result;
        }

        function daysBetween(startDate, endDate) {
            var millisecondsPerDay = 24 * 60 * 60 * 1000;
            return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
        }
        function getDetail(id) {

            var deferred = $q.defer();
            getItens().then(function (items) {
                var item = items.filter(function (item) { return item.id === id; })[0];
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