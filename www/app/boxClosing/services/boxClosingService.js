(function (angular) {
    var app = angular.module('services.boxClosingService', []);

    app.service('BoxClosingService', ['$q', '$http', 'ConstantsService', 'AuthService', function ($q, $http, ConstantsService, AuthService) {
        return {
            get: getItens
        };

        function getItens() {
            // return $http({
            //     method: 'GET',
            //     url: ConstantsService.GET_PRODUCTION_URL,
            //     headers: AuthService.headers()
            // }).then(function (params) {
            //     return params.data;
            // });
            var itens = [{
                "total": 10.000,
                "totalCommission": 10.000,
                "totalSaleProducts": 100,
                "totalProductionProducts": 50,
                "totalProductionPending": 60,
                "year" : 2016,
                "month": 4
            }, 
            {
                "total": 5.000,
                "totalCommission": 5.000,
                "totalSaleProducts": 50,
                "totalProductionProducts": 10,
                "totalProductionPending": 70,
                "year" : 2016,
                "month": 3
            }];

            var defer = $q.defer();
            defer.resolve({success : itens});
            return defer.promise;
        }
    }
    ]);
})(angular);
