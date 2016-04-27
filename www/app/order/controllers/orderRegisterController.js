(function (angular) {
    angular.module('controllers.orderRegisterController', [])
        .controller('OrderRegisterCtrl', OrderRegisterCtrl);
    OrderRegisterCtrl.$inject = ['OrderService', '$log', '$state', 'ClientService', 'ProductService'];
    function OrderRegisterCtrl(OrderService, $log, $state, ClientService, ProductService) {
        var vm = this;
        vm.showFormProduct = false;
        vm.querySearchClient = querySearchClient;
        vm.selectedItemChangeClient = selectedItemChangeClient;
        vm.searchTextChangeClient = searchTextChangeClient;
        vm.newClient = newClient;

        vm.userId = 0;
        vm.products = [];
        vm.productsModel = [];
        vm.order = { products: [] };
        vm.selectedProduct = {};
        vm.selectedClient = {};
        vm.showFormProduct = false;
        vm.showButtons = false;
        vm.showFormOrder = true;
        vm.querySearchProduct = querySearchProduct;
        vm.selectedItemChangeProduct = selectedItemChangeProduct;
        vm.searchTextChangeProduct = searchTextChangeProduct;
        vm.newProduct = newProduct;
        vm.addToOrder = addToOrder;
        vm.resetFields = resetFields;
        vm.removeItem = removeItem;
        init();


        function init() {
            loadProducts();
            loadClients();
        }
        function removeItem(item) {
            vm.order.products.pop(item);
        }
        
        function toPaymentOrder() {
            
        }
        function resetFields(form) {
            if (form) {
                form.$setPristine();
                form.$setUntouched();
            }
            
            vm.searchTextProduct = '';
            vm.selectedClient = {};
            vm.selectedProduct = {};
               
        }
        function addToOrder(form) {
            if (!vm.selectedProduct) return;
            vm.order.products.push(vm.selectedProduct);   
            
            resetFields(form);
        }
        /**
         * clients
         */
        function newClient(state) {
            $state.go('app.createClient', { 'clientName': vm.searchTextClient });
        }

        function querySearchClient(query) {
            query = angular.lowercase(query);
            var results = query ?
                vm.clients.filter(function (item) {
                    return angular.lowercase(item.display).indexOf(query) >= 0;
                })
                : vm.clients;

            return results;
        }
        function searchTextChangeClient(text) {
            $log.info('Text changed to ' + text);
        }
        function selectedItemChangeClient(item) {
            vm.showFormProduct = true;
            vm.selectedClient = item;
            $log.info('Item changed to ' + JSON.stringify(item));
        }

        function loadClients() {
            // ClientService.get().then(function (values) {
            //     $log.debug('value', values);
            // });
            var clients = [
                { value: 1, display: 'Erick Wendel' },
                { value: 2, display: 'Gustavo Oliveira' },
                { value: 4, display: 'Gustavo Oliveira2' },
                { value: 3, display: 'Ícaro Bichir' }
            ];
            
            vm.clients = clients;

        }
        /////////////////////////////////////

        /**
         * products
         */
        function newProduct(state) {
            $state.go('app.createProduct', { 'ProductName': vm.searchTextProduct });
        }
        

        function querySearchProduct(query) {
            query = angular.lowercase(query);
            var results = query ?
                vm.products.filter(function (item) {
                    return angular.lowercase(item.display).indexOf(query) >= 0;
                })
                : vm.products;

            return results;
        }
        function searchTextChangeProduct(text) {
            $log.info('Text changed to ' + text);
        }
        function selectedItemChangeProduct(item) {
            if (!item) return;

            var selected = vm.productsModel.filter(function filterProducts(product) {
                return product.id == item.value;
            });

            vm.selectedProduct = selected[0];
            vm.selectedProduct.client = { id: vm.selectedClient.value };
            vm.selectedProduct.user = { id: vm.userId };
            vm.showButtons = true;
            $log.info('Item changed to ' + JSON.stringify(selected[0]));
        }

        function loadProducts() {
            ProductService.products().then(function (products) {
                if (!products) return;
                vm.productsModel = products;
                var itens = angular.copy(products);
                itens = itens.map(function mapFn(item) {
                    return { value: item.id, display: item.nome };
                });
                vm.products = itens;
            });

        }

    }

})(angular);
