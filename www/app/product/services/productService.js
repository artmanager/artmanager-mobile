(function (angular) {
    var app = angular.module('services.productsService', []);

    app.service('ProductsService', function ($q) {
        var products = function () {
            var mockObjects = [{ "id": 433, "categoria": "", "fornecedor": "ZOARERE", "nome": "NomeProduto 7", "tamanho": 9, "peso": 54.3, "descricao": "DescricaoProduto 9", "custo": 62.5, "precoVenda": 71.9, "quantidadeDisponivel": 97 }, { "id": 977, "categoria": "", "fornecedor": "SLAMBDA", "nome": "NomeProduto 1", "tamanho": 3, "peso": 81.9, "descricao": "DescricaoProduto 6", "custo": 2.7, "precoVenda": 82.3, "quantidadeDisponivel": 35 }, { "id": 247, "categoria": "", "fornecedor": "TWIIST", "nome": "NomeProduto 9", "tamanho": 10, "peso": 41.8, "descricao": "DescricaoProduto 5", "custo": 37.9, "precoVenda": 24.4, "quantidadeDisponivel": 31 }, { "id": 187, "categoria": "", "fornecedor": "VENOFLEX", "nome": "NomeProduto 4", "tamanho": 6, "peso": 62.4, "descricao": "DescricaoProduto 4", "custo": 23.1, "precoVenda": 28.7, "quantidadeDisponivel": 56 }, { "id": 178, "categoria": "", "fornecedor": "KYAGORO", "nome": "NomeProduto 3", "tamanho": 1, "peso": 89.9, "descricao": "DescricaoProduto 2", "custo": 42.5, "precoVenda": 63.5, "quantidadeDisponivel": 19 }, { "id": 842, "categoria": "", "fornecedor": "MINGA", "nome": "NomeProduto 8", "tamanho": 10, "peso": 8.4, "descricao": "DescricaoProduto 8", "custo": 33.3, "precoVenda": 14, "quantidadeDisponivel": 19 }, { "id": 362, "categoria": "", "fornecedor": "CUIZINE", "nome": "NomeProduto 7", "tamanho": 4, "peso": 38, "descricao": "DescricaoProduto 5", "custo": 16.4, "precoVenda": 5.9, "quantidadeDisponivel": 30 }, { "id": 159, "categoria": "", "fornecedor": "DIGIRANG", "nome": "NomeProduto 5", "tamanho": 9, "peso": 50, "descricao": "DescricaoProduto 8", "custo": 85.2, "precoVenda": 29, "quantidadeDisponivel": 51 }, { "id": 925, "categoria": "", "fornecedor": "WRAPTURE", "nome": "NomeProduto 5", "tamanho": 4, "peso": 76.7, "descricao": "DescricaoProduto 3", "custo": 7.2, "precoVenda": 26.7, "quantidadeDisponivel": 32 }, { "id": 525, "categoria": "", "fornecedor": "KINETICUT", "nome": "NomeProduto 5", "tamanho": 10, "peso": 72.4, "descricao": "DescricaoProduto 1", "custo": 39.3, "precoVenda": 77.8, "quantidadeDisponivel": 82 }, { "id": 875, "categoria": "", "fornecedor": "NETILITY", "nome": "NomeProduto 8", "tamanho": 5, "peso": 0.8, "descricao": "DescricaoProduto 10", "custo": 28.1, "precoVenda": 0.2, "quantidadeDisponivel": 26 }, { "id": 386, "categoria": "", "fornecedor": "VERBUS", "nome": "NomeProduto 9", "tamanho": 8, "peso": 20.9, "descricao": "DescricaoProduto 4", "custo": 2.6, "precoVenda": 30.5, "quantidadeDisponivel": 78 }, { "id": 464, "categoria": "", "fornecedor": "ZILLAN", "nome": "NomeProduto 7", "tamanho": 1, "peso": 45.9, "descricao": "DescricaoProduto 9", "custo": 16.9, "precoVenda": 33.4, "quantidadeDisponivel": 78 }, { "id": 495, "categoria": "", "fornecedor": "DATAGENE", "nome": "NomeProduto 9", "tamanho": 0, "peso": 34.4, "descricao": "DescricaoProduto 1", "custo": 5.6, "precoVenda": 20.4, "quantidadeDisponivel": 91 }, { "id": 922, "categoria": "", "fornecedor": "OLYMPIX", "nome": "NomeProduto 6", "tamanho": 9, "peso": 86.3, "descricao": "DescricaoProduto 10", "custo": 76.3, "precoVenda": 36.5, "quantidadeDisponivel": 7 }, { "id": 431, "categoria": "", "fornecedor": "SLUMBERIA", "nome": "NomeProduto 3", "tamanho": 3, "peso": 71.4, "descricao": "DescricaoProduto 10", "custo": 90.2, "precoVenda": 84.8, "quantidadeDisponivel": 68 }, { "id": 850, "categoria": "", "fornecedor": "CEMENTION", "nome": "NomeProduto 5", "tamanho": 8, "peso": 69, "descricao": "DescricaoProduto 9", "custo": 74.9, "precoVenda": 12.4, "quantidadeDisponivel": 22 }];


            var getItens = $q(function (resolve, reject) {
                resolve(mockObjects);
            });
            return getItens;
        };



        return {
            products: products
        };



    });
})(angular);