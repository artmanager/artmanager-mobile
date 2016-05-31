(function (angular) {
    angular.module('controllers.orderController', [])
        .controller('OrderCtrl', OrderCtrl);

    OrderCtrl.$inject = ['OrderService', '$log', '$state', 'ClientService', 'ProductService', 'toastr', 'LoadingPopup'];

    function OrderCtrl(OrderService, $log, $state, ClientService, ProductService, toastr, LoadingPopup) {
        var vm = this;
        vm.showFormProduct = false;

        vm.userId = 1;
        vm.products = [];
        vm.productsModel = [];
        vm.order = { products: [] };
        vm.searchTextClient = '';
        vm.searchTextProduct = '';
        vm.selectedProduct = {};
        vm.selectedClient = {};
        vm.client = {};
        vm.showFormProduct = false;
        vm.showButtons = false;
        vm.showFormOrder = true;
        vm.showFormPayment = false;
        vm.showDetailOrder = false;
        vm.addToOrder = addToOrder;
        vm.toPaymentOrder = toPaymentOrder;
        vm.resetFields = resetFields;
        vm.removeItem = removeItem;
        vm.finishOrder = finishOrder;
        vm.backToPayment = backToPayment;
        vm.backToFormOrder = backToFormOrder;
        vm.create = create;
        
        //altoCompletes
        vm.querySearchClient = querySearchClient;
        vm.querySearchProduct = querySearchProduct;

        vm.selectedItemChangeClient = selectedItemChangeClient;
        vm.selectedItemChangeProduct = selectedItemChangeProduct;
        
        vm.searchTextChangeClient = searchTextChangeClient;
        vm.searchTextChangeProduct = searchTextChangeProduct;

        vm.newClient = newClient;
        vm.newProduct = newProduct;


        init();


        //--------------------


        function init() {
            loadProducts();
            loadClients();
        }
        function create() {
            var order = {};
            LoadingPopup.show();
            order.client = { id: vm.client.value };
            order.user = {id: vm.userId};
            order.which = {
                total_value: vm.order.total_value,
                entrance: vm.order.entrance,
                discount: vm.order.discount
            };
            
            order.products = vm.order.products.map(function (product) {
                var obj = {
                    id: product.id,
                    describe: product.describe,
                    quantity: product.quantity
                };
                if (product.sendDate) {
                    order.production = {delivery_date : product.sendDate};
                }

                return obj;
            });
            $log.debug('order', order);
            OrderService.create(order).then(onCreateSuccess, onCreateError);
        }
        function onCreateError(err) {
            LoadingPopup.hide();
            $log.error('onCreateError', err);
            toastr.error('Erro interno no servidor');
        }
        function onCreateSuccess(success) {
            LoadingPopup.hide();
            $log.debug('onCreateSuccess', success);
            if(success.success){
                toastr.success('Pedido registrado com sucesso !');
                $state.go('app.orders');
                
            }
            else if(success.error)
                toastr.error('Não Foi possivel registrar seu pedido: ' + success.error);
        }
        function backToFormOrder() {
            vm.showFormPayment = false;
            vm.showFormOrder = true;
        }
        function backToPayment() {
            vm.showDetailOrder = false;
            vm.showFormPayment = true;
        }
        function removeItem(item) {
            vm.order.products.pop(item);
        }
        function toggleForms() {
            vm.showFormPayment = vm.showFormPayment ? false : true;
            vm.showFormOrder = !vm.showFormPayment;
        }
        function finishOrder() {
            var discount = vm.order.discount || 0;
            var entrance = vm.order.entrance || 0;
            var total = angular.copy(vm.order.total_value);
            var totalWithDescount = vm.order.total_value - (discount + entrance);
            vm.order.total_value = total; //total - totalWithDescount;
            vm.order.pending_value = totalWithDescount; 
            vm.showDetailOrder = true;
            vm.showFormPayment = false;

        }
        function toPaymentOrder() {
            toggleForms();
            vm.order.total_value = 0;

            vm.order.products.forEach(function (e) {
                vm.order.total_value += parseFloat(e.quantity) * parseFloat(e.sale_cost);
            });
            console.log('vm.order.total_value', vm.order.total_value);
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
       
       
        //altoCOmpletes
        function newClient(state) {
            $state.go('app.createClient', { 'clientName': vm.searchTextClient });
        }
        function newProduct(state) {
            var obj = { 'productName': vm.searchTextProduct };
            console.log('obj', obj);
            $state.go('app.createProduct', obj);
        }



        function querySearchClient(query) {
            if (!vm.clients) {
                toastr.success('Aguarde...');
                return;
            }
            query = angular.lowercase(query);
            var results = query ?
                vm.clients.filter(function (item) {
                    return angular.lowercase(item.display).indexOf(query) >= 0;
                })
                : vm.clients;

            return results;
        }

        function querySearchProduct(query) {
            if (!vm.products) {
                toastr.success('Aguarde...');
                return;
            }
            query = angular.lowercase(query);
            var results = query ?
                vm.products.filter(function (item) {
                    return angular.lowercase(item.display).indexOf(query) >= 0;
                })
                : vm.products;

            return results;
        }


        function searchTextChangeClient(text) {
            $log.info('Text changed to ' + text);
        }
        function searchTextChangeProduct(text) {
            $log.info('Text changed to ' + text);
        }
        
        function selectedItemChangeClient(item) {
            vm.showFormProduct = true;
            vm.selectedClient = item;
            vm.client = item;
            $log.info('Item changed to ' + JSON.stringify(item));
        }
        function selectedItemChangeProduct(item) {
            if (!item) return;

            var selected = vm.productsModel.filter(function filterProducts(product) {
                return product.id == item.value;
            });

            vm.selectedProduct = selected[0];
            vm.selectedProduct.client = { id: vm.client.value };
            vm.selectedProduct.user = { id: vm.userId };
            vm.selectedProduct.quantity = 1;
            vm.showButtons = true;
            $log.info('Item changed to ' + JSON.stringify(selected[0]));
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
        function loadProducts() {
            ProductService.products().then(function (result) {
                
                var products = result.products[0];
                console.log('products', products);
                if (!products) return;
                vm.productsModel = products;
                var itens = angular.copy(products);
                console.log('itens', itens);
                itens = itens.map(function mapFn(item) {
                    return { value: item.id, display: item.name };
                });
                vm.products = itens;
            });

        }
        /////////////////////////////////////
 


        

        

    }

})(angular);
