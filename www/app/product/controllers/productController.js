(function (angular) {
    angular.module('controllers.productController', [])
        .controller('ProductCtrl', ProductCtrl);
    ProductCtrl.$inject = ['$timeout', 'ProductService', 'LoadingPopup'];
    function ProductCtrl($timeout, ProductService, LoadingPopup) {
        var vm = this;


        vm.items = [];
        vm.order = "nome";
        vm.ascending = true;
        vm.initialDate = null;
        vm.finalDate = null;
        vm.itemsFilter = [];
        vm.search = search;
        vm.filters = getFilters();

        (function init() {
            loadProducts();
        })();

        function search() {
            loadProducts();
            // var itens = angular.copy(vm.itemsFilter);

            // var initialDate = vm.initialDate || new Date(0);
            // var finalDate = vm.finalDate || new Date();

            // var filteredItens = itens.filter(function (item) {
            //     var dateItem = new Date(item.creationDate);
            //     return dateItem >= initialDate && dateItem <= finalDate;

            // });
            // console.log('filteredItens', filteredItens);
            // vm.items = filteredItens;

        }
        function loadProducts() {
            LoadingPopup.show();
            var initialDate = vm.initialDate || new Date(0);
            var finalDate = vm.finalDate || new Date();
            var obj = {
                'dt_from': initialDate.toISOString(),
                'dt_to': finalDate.toISOString()
            };
            ProductService.report().then(function (itens) {
                LoadingPopup.hide();
                var products = itens.success;
                if (!products) return;

                //remover
                products = products.map(function (item) {
                    item.creationDate = new Date().toISOString();
                    item.date = getDateRef(item.month, item.year);
                    return item;
                });
                console.log('products', products);
                vm.items = products;
                vm.itemsFilter = products;

            });
        }
        function getDateRef(month, year) {
            month = month >= 10 ? month : "0" + month;
            return month + "/" + year;
        }
        function getFilters() {
            var filters = [];

            var filter = {};
            filter.value = "name";
            filter.desc = "Nome";
            filter.selected = true;
            filters.push(filter);

            // filter = {};
            // filter.value = "categoria";
            // filter.desc = "Categoria";
            // filter.selected = false;
            // filters.push(filter);

            filter = {};
            filter.value = "quantity";
            filter.desc = "Quantidade";
            filter.selected = false;
            filters.push(filter);

            filter = {};
            filter.value = "sale_cost";
            filter.desc = "Preco de Venda";
            filter.selected = false;
            filters.push(filter);

            filter = {};
            filter.value = "cost";
            filter.desc = "Preco de Custo";
            filter.selected = false;
            filters.push(filter);



            return filters;
        }





    }



})(angular);