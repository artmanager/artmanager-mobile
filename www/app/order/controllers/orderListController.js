(function (angular) {
    angular.module('controllers.orderListController', [])
        .controller('OrderListCtrl', OrderListCtrl);

    OrderListCtrl.$inject = ['OrderService', '$log', '$state', 'DateService', 'ClientService', 'toastr', 'LoadingPopup'];

    function OrderListCtrl(OrderService, $log, $state, DateService, ClientService, toastr, LoadingPopup) {
        var vm = this;
        vm.filters = getFilters();
        vm.clients = [];
        vm.items = [];
        vm.itemsFilter = [];
        vm.querySearch = querySearch;
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange = searchTextChange;
        vm.newState = newState;
        vm.detail = toOrderDetail;
        vm.countProducts = 0;
        var count = 0;

        (function init() {
            vm.order = 'delivery_date';
            loadOrders();
            loadClients();

        })();
        function mapCountProducts(item) {
            item.order.products.map(filterCountProducts);
            item.countProducts = count;
            return item;
        }
        function filterCountProducts(item) {
            count += item.quantity;
        }
        var i = 0;
        function mapItens(item) {
            item.creationDate = DateService.formatToLocaleDate(new Date(item.creationDate));
            var products = item.order.products.map(function (product) {
                product.delivery_date = DateService.formatToLocaleDate(new Date(product.delivery_date));
                return product;
            });
            //REMOVER
            // item.client.name = "Erick Wendel" + i++ ;
            item.order.products = products;
            return item;
        }
        function loadOrders() {
            OrderService.get().then(function (items) {
                var orders = items.success;
                console.log('items.success', items.success);
                if (!orders) return;

                vm.items = orders
                    .map(mapItens)
                    .map(mapCountProducts);
                vm.itemsFilter = angular.copy(vm.items);

            });
        }
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

        function newState(state) {
            alert("Sorry! You'll need to create a Constituion for " + state + " first!");
        }
        function querySearch(query) {
            query = angular.lowercase(query);
            var results = query ?
                vm.clients.filter(function (item) {
                    return angular.lowercase(item.display).indexOf(query) >= 0;
                })
                : vm.clients;

            return results;
        }
        function filterOrderFromClients(query) {

            var items = angular.copy(vm.itemsFilter);

            var itensFilters = items.filter(function (item) {
                var clientName = angular.lowercase(query);
                var clientOrderName = angular.lowercase(item.client.name);
                if(typeof clientOrderName === "undefined") return false;
                
                console.log('clientName: ' + clientName + ' clientOrderName: ' + clientOrderName);
                return angular.lowercase(clientOrderName).indexOf(clientName) >= 0;
            });
            
            console.log('itensFilters', itensFilters);
            vm.items = [];
            vm.items = itensFilters;
            
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
            filterOrderFromClients(text);
        }
        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
            if(!item) return;
            filterOrderFromClients(item.display);
        }

        function loadClients() {
            ClientService.get().then(function (values) {
                if (values.error) {
                    toastr.error('Erro ao carregar clientes');
                    return;
                }
                if (!values.data) return;
                var clients = values.data.clients.map(function (client) {
                    return {
                        value: client.id,
                        display: client.name
                    };
                });

                vm.clients = clients;


            });


        }
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

        function toOrderDetail(item) {
            var obj = JSON.stringify(item);
            console.log(obj);
            $state.go('app.orderDetail', { item: obj });
        }

    }

})(angular);