(function (angular) {
    var app = angular.module('controllers.productController', []);
    app.controller('ProductsCtrl', ['$scope','$timeout', 'ionicMaterialMotion', 'ionicMaterialInk','ProductsService', function ($scope, $timeout,ionicMaterialMotion, ionicMaterialInk, ProductsService) {
        // Set Header
        var self = $scope;
        
        self.$parent.showHeader();
        self.$parent.clearFabs();
        self.$parent.setHeaderFab('left');

        $timeout(function() {
            self.isExpanded = true;
            self.$parent.setExpanded(true);
        }, 300);

        ionicMaterialMotion.fadeSlideInRight();

        ionicMaterialInk.displayEffect();


        self.products = [];
        self.order = "nome";
        self.ascending = true;
        
        self.filters = getFilters();
        self.init = (function () {
            ProductsService.products().then(function (itens) {
                self.products = itens;
                
            });
        })();
        
        function getFilters () {
            var filters = [];
            
            var filter = {};
            filter.value= "nome";
            filter.desc = "Nome";
            filter.selected = true;
            filters.push(filter);
            
            filter = {};
            filter.value= "categoria";
            filter.desc = "Categoria";
            filter.selected = false;
            filters.push(filter);
            
            filter = {};
            filter.value= "quantidadeDisponivel";
            filter.desc = "Quantidade";
            filter.selected = false;
            filters.push(filter);
            
            filter = {};
            filter.value= "precoVenda";
            filter.desc = "Preco de Venda";
            filter.selected = false;
            filters.push(filter);
            
            filter = {};
            filter.value= "precoCusto";
            filter.desc = "Preco de Custo";
            filter.selected = false;
            filters.push(filter);
            
            filter = {};
            filter.value= "peso";
            filter.desc = "Peso";
            filter.selected = false;
            filters.push(filter);
            console.log(filters)
            return filters;
        };
    }]);



})(angular);