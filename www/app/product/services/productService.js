(function (angular) {
    angular.module('services.productService', [])
        .service('ProductService', ProductService);

    ProductService.$inject = ['$q', '$http', 'ConstantsService', 'AuthService'];
    function ProductService($q, $http, ConstantsService, AuthService) {
        return {
            products: products,
            productsCountMonth: getCountItens,
            create: create
        };

        function create(product) {
            console.log('product', product);
            return $http({
                method: 'POST',
                url: ConstantsService.CREATE_PRODUCT_URL,
                data: product,
                headers: AuthService.headers()
            })
                .then(function (params) {
                    return params.data;
                });
        }
        function products() {
            var deferred = $q.defer();
            deferred.resolve(getItens());
            return deferred.promise;
        }

        function getItens() {
            return [{
                "id": 433,
                "categoria": "",
                "fornecedor": "Tecidos da Maria",
                "nome": "Bolsa de pano",
                "tamanho": 9,
                "peso": 54.3,
                "descricao": "Bolsa de pano do Tecidos da Maria",
                "custo": 62.5,
                "precoVenda": 71.9,
                "quantidadeDisponivel": 97
            }, {
                    "id": 977,
                    "categoria": "",
                    "fornecedor": "Samambaia panos LTDA",
                    "nome": "Porta bijuterias",
                    "tamanho": 3,
                    "peso": 81.9,
                    "descricao": "Porta bijuterias da Samambaia panos LTDA",
                    "custo": 2.7,
                    "precoVenda": 82.3,
                    "quantidadeDisponivel": 35
                }, {
                    "id": 247,
                    "categoria": "",
                    "fornecedor": "Delta produtos",
                    "nome": "Jaqueta infantil",
                    "tamanho": 10,
                    "peso": 41.8,
                    "descricao": "Jaqueta infantil da Delta produtos",
                    "custo": 37.9,
                    "precoVenda": 24.4,
                    "quantidadeDisponivel": 31
                }, {
                    "id": 187,
                    "categoria": "",
                    "fornecedor": "Adidas",
                    "nome": "Moletom",
                    "tamanho": 6,
                    "peso": 62.4,
                    "descricao": "Moletom da Adidas",
                    "custo": 23.1,
                    "precoVenda": 28.7,
                    "quantidadeDisponivel": 56
                }, {
                    "id": 178,
                    "categoria": "",
                    "fornecedor": "Nike",
                    "nome": "Calça adulto",
                    "tamanho": 1,
                    "peso": 89.9,
                    "descricao": "Calça adulto da Nike",
                    "custo": 42.5,
                    "precoVenda": 63.5,
                    "quantidadeDisponivel": 19
                }, {
                    "id": 842,
                    "categoria": "",
                    "fornecedor": "Batman",
                    "nome": "Cinto de utilidades",
                    "tamanho": 10,
                    "peso": 8.4,
                    "descricao": "Cinto de utilidades do Batman",
                    "custo": 33.3,
                    "precoVenda": 14,
                    "quantidadeDisponivel": 19
                }, {
                    "id": 362,
                    "categoria": "",
                    "fornecedor": "Apple",
                    "nome": "Porta utensilios",
                    "tamanho": 4,
                    "peso": 38,
                    "descricao": "Porta utensilios da Apple",
                    "custo": 16.4,
                    "precoVenda": 5.9,
                    "quantidadeDisponivel": 30
                }, {
                    "id": 159,
                    "categoria": "",
                    "fornecedor": "Adidas",
                    "nome": "Boné estilizado",
                    "tamanho": 9,
                    "peso": 50,
                    "descricao": "Boné estilizado da Adidas",
                    "custo": 85.2,
                    "precoVenda": 29,
                    "quantidadeDisponivel": 51
                }, {
                    "id": 925,
                    "categoria": "",
                    "fornecedor": "Ecko",
                    "nome": "Moletom",
                    "tamanho": 4,
                    "peso": 76.7,
                    "descricao": "Moletom da Ecko",
                    "custo": 7.2,
                    "precoVenda": 26.7,
                    "quantidadeDisponivel": 32
                }, {
                    "id": 525,
                    "categoria": "",
                    "fornecedor": "Impacta",
                    "nome": "Samambaia",
                    "tamanho": 10,
                    "peso": 72.4,
                    "descricao": "Samambaia da Impacta",
                    "custo": 39.3,
                    "precoVenda": 77.8,
                    "quantidadeDisponivel": 82
                }, {
                    "id": 875,
                    "categoria": "",
                    "fornecedor": "Maria dos tecidos",
                    "nome": "Cortina",
                    "tamanho": 5,
                    "peso": 0.8,
                    "descricao": "Cortina da Maria dos tecidos ",
                    "custo": 28.1,
                    "precoVenda": 0.2,
                    "quantidadeDisponivel": 26
                }];
        }

        function getCountItens() {
            var defer = $q.defer();
            var item = {
                "id": "c1ff60e9-2ee3-461b-aa81-70f21def8495",
                "month": 1,
                "year": 2016,
                "count": 0,
                "employees": [{
                    "id": "c1cebcd6-7b5d-472f-9852-db7537475039",
                    "nome": "Cinto de Utilidades",
                    "count": 7
                }, {
                        "id": "daa4b3db-61a1-4a35-b045-f656a5d8830c",
                        "nome": "Jaqueta Infantil",
                        "count": 16
                    }, {
                        "id": "d570dcc4-070f-4b7b-b982-c01f28d7884e",
                        "nome": "Porta Utensilios",
                        "count": 1
                    }, {
                        "id": "2a664bde-f3ee-48f2-993f-b297a0eb98be",
                        "nome": "Cortina",
                        "count": 8
                    }, {
                        "id": "7924f643-2c7a-4aab-a0c6-6d0384f30c92",
                        "nome": "Calça Adidas",
                        "count": 12
                    }]
            };

            item.count = item.employees.reduce(function (prev, next) {
                return (prev.count || prev) + next.count;
            });


            defer.resolve(item);
            return defer.promise;


        }
    }
})(angular);