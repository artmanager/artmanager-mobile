(function (angular) {
    var app = angular.module('services.employeeService', []);

    app.service('EmployeeService', ['$q', '$http', 'ConstantsService', 'AuthService', function ($q, $http, ConstantsService, AuthService) {
        return {
            employess: employess,
            reportSupplier: reportSupplier
        };
        
        function  reportSupplier(obj) {
            return $http({
                method: 'POST',
                data: obj,
                url: ConstantsService.GET_PROVIDER_REPORT_URL, //+ "?dt_from=" + obj.dt_from + "&dt_to="+ obj.dt_to,
                headers: AuthService.headers()
            }).then(function (params) {
                return params.data;
            });
        }
        function employess(obj) {
            return $http({
                method: 'GET',
                data: obj,
                url: ConstantsService.GET_PROVIDER_URL,
                headers: AuthService.headers()
            }).then(function (params) {
                return params.data;
            });
        }

        function getItens() {
            return [{
                "supplier": "Maria",
                "total": "800",
                "month": 2,
                "year": 2016,
                "products": [{
                    "name": "Bolsa do Batman",
                    "height": 100,
                    "weight": 200.5,
                    "quantity": 6
                }]
            },
            {
                "month": 1,
                "year": 2016,
                "supplier": "Josefa",
                "total": "900",
                "products": [{
                    "name": "Bolsa do Batman",
                    "height": 100,
                    "weight": 200.5,
                    "quantity": 6
                }]
            }
            ];


            
        }

        
    }]);
})(angular);