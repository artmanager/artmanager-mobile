(function (angular) {
    angular.module('controllers.orderListController', [])
        .controller('OrderListCtrl', OrderListCtrl);

    OrderListCtrl.$inject = ['OrderService', '$log', '$state', 'ClientService', 'ProductService', 'toastr', 'LoadingPopup'];

    function OrderListCtrl(OrderService, $log, $state, ClientService, ProductService, toastr, LoadingPopup) {
         var vm = this;
         vm.filters = getFilters();
         (function init(){
             vm.order = 'delivery_date';
            OrderService.get().then(function (items) {
                console.log('items', items);
                vm.items = items;
            });
             
         })();
         
         function getFilters() {
            var filters = [];
            var filter = {};



            filter.value = "delivery_date";
            filter.desc = "Entrega";
            filters.push(filter); 

            filter = {};
            filter.value = "name";
            filter.desc = "Nome";
            filters.push(filter);

            // filter = {};
            // filter.value = "status";
            // filter.desc = "Status";
            // filters.push(filter);



            return filters;
        }
         
         
    }

})(angular);
