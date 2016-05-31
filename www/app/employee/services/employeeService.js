(function (angular) {
    var app = angular.module('services.employeeService', []);

    app.service('EmployeeService', ['$q', '$http', 'ConstantsService', 'AuthService', function ($q, $http, ConstantsService, AuthService) {
        return {
            employess: employess,
            employee: getDetail,
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

        function getDetail(id) {
            var deferred = $q.defer();
            var items = getItens();
            var employee = items.filter(function (item) { return item.id === id; })[0];
            employee.products = [{ "id": 433, "categoria": "", "fornecedor": "ZOARERE", "nome": "NomeProduto 7", "tamanho": 9, "peso": 54.3, "descricao": "DescricaoProduto 9", "custo": 62.5, "precoVenda": 71.9, "quantidadeDisponivel": 97 }, { "id": 977, "categoria": "", "fornecedor": "SLAMBDA", "nome": "NomeProduto 1", "tamanho": 3, "peso": 81.9, "descricao": "DescricaoProduto 6", "custo": 2.7, "precoVenda": 82.3, "quantidadeDisponivel": 35 }, { "id": 247, "categoria": "", "fornecedor": "TWIIST", "nome": "NomeProduto 9", "tamanho": 10, "peso": 41.8, "descricao": "DescricaoProduto 5", "custo": 37.9, "precoVenda": 24.4, "quantidadeDisponivel": 31 }, { "id": 187, "categoria": "", "fornecedor": "VENOFLEX", "nome": "NomeProduto 4", "tamanho": 6, "peso": 62.4, "descricao": "DescricaoProduto 4", "custo": 23.1, "precoVenda": 28.7, "quantidadeDisponivel": 56 }];

            deferred.resolve(employee);
            return deferred.promise;
        }
    }]);
})(angular);