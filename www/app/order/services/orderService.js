/* global angular*/
(function (angular) {
    var app = angular.module('services.orderService', []);
    app.service('OrderService', ['$q', function ($q) {
        return {
            get: getItens,
            order: getDetail
        };
        function getItens() {
            var items = [{ "id": "56a936528dfbe664fbc45ae3", "status": 0, "name": "Candy Snow", "product": "consectetur adipisicing", "date": "25/08/2015" }, { "id": "56a936522f337a1bc3364dee", "status": 1, "name": "Wilkinson Lee", "product": "aute ut", "date": "23/08/2015" }, { "id": "56a936521c8401526a84bb90", "status": 1, "name": "Whitney Michael", "product": "qui officia", "date": "22/03/2015" }, { "id": "56a93652f63e2e55bf83c7c3", "status": 0, "name": "Krista Richmond", "product": "commodo cillum", "date": "28/07/2015" }, { "id": "56a93652dc9b9c485fd7cf56", "status": 1, "name": "Crane Heath", "product": "et laboris", "date": "22/01/2016" }, { "id": "56a9365234e54b222ae70922", "status": 0, "name": "Hester Blankenship", "product": "adipisicing reprehenderit", "date": "16/03/2015" }, { "id": "56a936523ba38f84067e4e8a", "status": 1, "name": "Melody Landry", "product": "tempor pariatur", "date": "26/10/2015" }, { "id": "56a93652ff4ecd7e2b356dbe", "status": 0, "name": "Alisa Maynard", "product": "ut consectetur", "date": "28/09/2015" }, { "id": "56a936528ae346478912bca0", "status": 0, "name": "Cruz Mcbride", "product": "velit ex", "date": "24/01/2016" }, { "id": "56a93652589f72d2035dd6ce", "status": 1, "name": "Lambert Buck", "product": "exercitation voluptate", "date": "04/09/2015" }, { "id": "56a936524cf918945d427e1d", "status": 2, "name": "Charity Stafford", "product": "amet sunt", "date": "08/09/2015" }, { "id": "56a93652f5f88efa83c0e558", "status": 0, "name": "Paul Salinas", "product": "sunt id", "date": "18/12/2015" }, { "id": "56a9365219d220265b4a862f", "status": 0, "name": "Lillie Maxwell", "product": "commodo officia", "date": "28/02/2015" }, { "id": "56a9365244df10d2fb9786be", "status": 0, "name": "Henrietta Mccullough", "product": "aute dolor", "date": "27/06/2015" }, { "id": "56a936520828907f186bb7c0", "status": 1, "name": "Frye Avery", "product": "mollit cillum", "date": "05/11/2015" }, { "id": "56a93652ff8090e5447c7dda", "status": 2, "name": "Baxter Blanchard", "product": "officia occaecat", "date": "21/02/2015" }, { "id": "56a936527b0272d0eec9106f", "status": 2, "name": "Shelia England", "product": "cillum est", "date": "04/07/2015" }, { "id": "56a93652bec658da40e9dc24", "status": 0, "name": "Harper Weeks", "product": "elit eiusmod", "date": "24/11/2015" }, { "id": "56a9365272b5778294ac2218", "status": 2, "name": "Josephine Crawford", "product": "cillum enim", "date": "28/01/2015" }, { "id": "56a936526d4e8bcbbedee470", "status": 0, "name": "Stewart Franks", "product": "tempor eiusmod", "date": "27/03/2015" }];
            var defer = $q.defer();
            defer.resolve(items);

            return defer.promise;
        }

        function getDetail(id) {
            
            var deferred = $q.defer();
            getItens().then(function (items) {
                var item = items.filter(function (item) { return item.id === id; })[0];
                // var order = {
                //     "id": "56a942e2e6777f0dda71853d",
                //     "clientName": "Janelle Alston",
                //     "employeeName": item.name,
                //     "orderDate": item.date,
                //     "signalValue": 38.2848,
                //     "totalValue": 515.6781,
                //     "product": item.product,

                // }
                deferred.resolve(item);
            });
            return deferred.promise;

        }
    }]);



})(angular);