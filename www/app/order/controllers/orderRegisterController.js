(function (angular) {
    angular.module('controllers.orderRegisterController', [])
        .controller('OrderRegisterCtrl', OrderRegisterCtrl);
    OrderRegisterCtrl.$inject = ['OrderService', '$log', '$state'];
    function OrderRegisterCtrl(OrderService,  $log, $state) {
        var vm = this;
        vm.clients = loadAll();
        vm.querySearch = querySearch;
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange = searchTextChange;
        vm.newClient = newClient;
        function newClient(state) {
            $state.go('app.createClient', {'clientName': vm.searchText});
        }

        function querySearch(query) {
            var results = query ? 
                                vm.clients.filter(function (item) {
                                    return angular.lowercase(item.display).indexOf(query) === 0;
                                })
                                : vm.clients;

            return results;
        }
        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }
        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }
        
        function loadAll() {
            var clients = [
                { value: 1, display: 'Erick Wendel' },
                { value: 2, display: 'Gustavo Oliveira' },
                { value: 4, display: 'Gustavo Oliveira2' },
                { value: 3, display: 'Ícaro Bichir' }
            ];
            return clients;

        }

    }

})(angular);
