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
        vm.dateSearch = getDateSearch();
        (function init() {
            loadProducts();
        })();

        function search() {
            loadProducts();
             

        }
        function getDateSearch() {
            var initialDate = vm.initialDate || undefined;
            var finalDate = vm.finalDate || undefined;
            var str = initialDate ? initialDate.toLocaleDateString() : "";
            str += finalDate ? ((initialDate ? " a " : "") + finalDate.toLocaleDateString()) : "";
            return str;
        }
        function loadProducts() {
            LoadingPopup.show();
            var initialDate = vm.initialDate || new Date(0);
            var finalDate = vm.finalDate || new Date();
            var obj = {
                'dt_from': initialDate.toISOString(),
                'dt_to': finalDate.toISOString()
            };
            vm.dateSearch = getDateSearch();

            ProductService.report(obj).then(function (itens) {
                LoadingPopup.hide();
                console.log('itens', itens);
                var products = itens.success;
                if (!products) return;

                //remover
                products = products.map(function (item) {
                    // item.creationDate = new Date().toISOString();
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