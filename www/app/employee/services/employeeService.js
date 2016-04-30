(function (angular) {
    var app = angular.module('services.employeeService', []);

    app.service('EmployeeService', ['$q', function ($q) {
        return {
            employess: employess,
            employee: getDetail
        };


        function employess() {
            var deferred = $q.defer();
            deferred.resolve(getItens());
            return deferred.promise;
        }

        function getItens() {
            return [{
                "id": "a037b28c-1e53-436e-933b-f7db657af6dc",
                "fornecedor": "Batman",
                "nome": "Padilla",
                "valorReceber": 8627.766
            }, {
                    "id": "0ad2b5bc-e1d4-424f-a3b3-2c0a2713d159",
                    "fornecedor": "Delta produtos",
                    "nome": "Kris",
                    "valorReceber": 2307.7789
                }, {
                    "id": "f3073b4e-a0b5-4b68-b1b5-08248aad8e3e",
                    "fornecedor": "Samambaia panos LTDA",
                    "nome": "Cummings",
                    "valorReceber": 3790.0628
                }, {
                    "id": "69503d00-a302-4b9d-9542-6128fed5f060",
                    "fornecedor": "Tecidos da Maria",
                    "nome": "Yates",
                    "valorReceber": 8570.3764
                }, {
                    "id": "b2699dbc-0175-4c4a-ac28-cfbe3b1e1173",
                    "fornecedor": "Nike",
                    "nome": "Inez",
                    "valorReceber": 3501.6929
                }, {
                    "id": "66852092-e1d6-4eec-9160-b05cd5962850",
                    "fornecedor": "Adidas",
                    "nome": "Liliana",
                    "valorReceber": 5616.4573
                }, {
                    "id": "74d0b381-fc9f-4a50-a86c-60d130f61267",
                    "fornecedor": "Nike",
                    "nome": "Brianna",
                    "valorReceber": 5123.7357
                }, {
                    "id": "0c94ba94-ca40-4a88-96fe-e5eb72aedaed",
                    "fornecedor": "Ecko",
                    "nome": "June",
                    "valorReceber": 5705.3393
                }, {
                    "id": "1ce93016-8cbe-48c6-a6fd-bd943c9cf051",
                    "fornecedor": "Impacta",
                    "nome": "Jessie",
                    "valorReceber": 4358.0958
                }, {
                    "id": "7605d8ff-d20d-4f6f-ae13-7c6a3f6d66fa",
                    "fornecedor": "Bamba",
                    "nome": "Imogene",
                    "valorReceber": 3704.1932
                }, {
                    "id": "2e16b957-8a75-41e4-891c-2adb4f589f61",
                    "fornecedor": "Apple",
                    "nome": "Washington",
                    "valorReceber": 8801.9922
                }, {
                    "id": "70a50bc3-1d75-4651-b2e4-e4b82f081cc0",
                    "fornecedor": "Ventisilva",
                    "nome": "Carla",
                    "valorReceber": 8554.1573
                }, {
                    "id": "a547073e-05cd-4485-aa04-a8ae5d0d07f5",
                    "fornecedor": "Microsoft",
                    "nome": "Chapman",
                    "valorReceber": 8709.4926
                }, {
                    "id": "e2f768e9-fe7b-4bcc-9535-40b72c53738d",
                    "fornecedor": "Tecidos do Joao",
                    "nome": "Olson",
                    "valorReceber": 8735.1405
                }, {
                    "id": "ae8eb1c7-0269-4f84-b05f-227f5a330ba9",
                    "fornecedor": "Samba da Laje LTDA",
                    "nome": "Musica",
                    "valorReceber": 6512.4634
                }, {
                    "id": "d7080e91-cab6-4eac-afe3-f3784cb75786",
                    "fornecedor": "Graci Bolos",
                    "nome": "Bolos",
                    "valorReceber": 5088.4524
                }, {
                    "id": "abc0ead8-1de5-4055-8a9c-97f12dece385",
                    "fornecedor": "Mecanica do Paulinho",
                    "nome": "Carros",
                    "valorReceber": 6104.8188
                }];
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