(function (angular) {
    angular.module('controllers.productCountController', [])
        .controller('ProductCountCtrl', ProductCountCtrl);

    ProductCountCtrl.$inject = ['ProductService'];
    function ProductCountCtrl(ProductService) {
        var vm = this;
        vm.item = [];
        vm.itemsFilter = [];
        vm.search = search;
        vm.initialDate = null;
        vm.finalDate = null;
        
        (function init() {
            loadProducts();
        })();
        
        function loadProducts() {
            var initialDate = vm.initialDate || new Date(0);
            var finalDate = vm.finalDate || new Date();
            
            var obj = {
                'dt_from' : initialDate.toISOString(),
                'dt_to': finalDate.toISOString()
            };
            ProductService.productsCountMonth(obj).then(function (item) {
                vm.item = item;
                console.log(item);
            });
        }
        function search() {
            loadProducts();
            // var itens = angular.copy(vm.itemsFilter);

            // var initialDate = vm.initialDate || new Date(0);
            // var finalDate = vm.finalDate || new Date();

            // var filteredItens = itens.filter(function (item) {
            //     var dateItem = new Date(item.year, (item.month), 01);
            //     return dateItem > initialDate && dateItem < finalDate;

            // });
            // vm.items = filteredItens;

        }
    }



})(angular);