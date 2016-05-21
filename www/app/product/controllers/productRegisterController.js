(function () {
    'user strict';
    angular.module('controllers.productRegisterController', [])
        .controller('ProductRegisterCtrl', ProductRegisterCtrl);

    ProductRegisterCtrl.$inject = ['toastr', 'ProductService', 'LoadingPopup', '$state', 'ProviderService', '$log'];
    function ProductRegisterCtrl(toastr, ProductService, LoadingPopup, $state, ProviderService, $log) {
        var vm = this;


        vm.content = { personalData: true, cost: false };
        vm.categories = [{ id: 1, description: 'roupas' },
            { id: 2, description: 'reciclaveis' }];

        vm.suppliers = [];

        vm.toggleForm = toggleForm;
        vm.create = create;
        vm.goBack = goBack;
        // vm.states = loadAll();
        // vm.querySearch = querySearch;
        // vm.selectedItemChange = selectedItemChange;
        // vm.searchTextChange = searchTextChange;
        
        // vm.newState = newState;
        (function init() {
            getSuppliers();
        })();



        function getSuppliers() {
            ProviderService.get().then(function (res) {

                vm.suppliers = res.data.supplier.map(function (item) {
                    return { id: item.id, description: item.name };
                });

            });
        }

        function toggleForm() {
            var isPersonal = vm.content.personalData;
            vm.content.personalData = !isPersonal;
            vm.content.cost = isPersonal;
        }

        function create() {

            LoadingPopup.show();
            try {
                vm.product.size = vm.product.size + "";
                vm.product.weight = vm.product.weight + "";
                console.log(vm.product);
                ProductService.create(vm.product).then(onCreate, onFail);
            }
            catch (e) {
                console.log(e);
                toastr.error('Erro ao cadastrar produto');
                LoadingPopup.hide();
            }
        }

        function goBack() {
            vm.toggleForm();
        }
        function onCreate(response) {
            if (response.error)
                toastr.error('Erro, contate o suporte.', 'Não foi possivel cadastrar');

            toastr.success(response.success);
            vm.product = {};
            LoadingPopup.hide();
        }
        function onFail(response) {
            toastr.error('Erro, contate o suporte.', 'Não foi possivel cadastrar');
            LoadingPopup.hide();
        }



        // // autocomplete

        // function newState(state) {
        //     alert("Sorry! You'll need to create a Constituion for " + state + " first!");
        // }

        // // --
        // function querySearch(query) {
        //     var results = query ? vm.states.filter(createFilterFor(query)) : vm.states,
        //         deferred;
        //     if (vm.simulateQuery) {
        //         deferred = $q.defer();
        //         $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
        //         return deferred.promise;
        //     } else {
        //         return results;
        //     }
        // }
        // function querySearchClient(query) {
        //     if (!vm.clients) {
        //         toastr.success('Aguarde...');
        //         return;
        //     }
        //     query = angular.lowercase(query);
        //     var results = query ?
        //         vm.clients.filter(function (item) {
        //             return angular.lowercase(item.display).indexOf(query) >= 0;
        //         })
        //         : vm.clients;

        //     return results;
        // }

        // // 
        // function searchTextChange(text) {
        //     $log.info('Text changed to ' + text);
        // }

        // function selectedItemChange(item) {
        //     $log.info('Item changed to ' + JSON.stringify(item));
        // }
        // function selectedItemChangeProduct(item) {
        //     if (!item) return;

        //     var selected = vm.productsModel.filter(function filterProducts(product) {
        //         return product.id == item.value;
        //     });

        //     vm.selectedProduct = selected[0];
        //     vm.selectedProduct.client = { id: vm.client.value };
        //     vm.selectedProduct.user = { id: vm.userId };
        //     vm.showButtons = true;
        //     $log.info('Item changed to ' + JSON.stringify(selected[0]));
        // }
        // function loadAll() {
        //     var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
        //       Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
        //       Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
        //       Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
        //       North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
        //       South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
        //       Wisconsin, Wyoming';

        //     return allStates.split(/, +/g).map(function (state) {
        //         return {
        //             value: state.toLowerCase(),
        //             display: state
        //         };
        //     });
        // }
        // function loadProducts() {
        //     ProductService.products().then(function (products) {
        //         if (!products) return;
        //         vm.productsModel = products;
        //         var itens = angular.copy(products);
        //         itens = itens.map(function mapFn(item) {
        //             return { value: item.id, display: item.nome };
        //         });
        //         vm.products = itens;
        //     });

        // }
         


    }
})();