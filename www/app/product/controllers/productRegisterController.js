(function () {
    'user strict';
    angular.module('controllers.productRegisterController', [])
        .controller('ProductRegisterCtrl', ProductRegisterCtrl);

    ProductRegisterCtrl.$inject = ['toastr', 'ProductService', 'LoadingPopup', '$state', 'ProviderService', '$log'];
    function ProductRegisterCtrl(toastr, ProductService, LoadingPopup, $state, ProviderService, $log) {
        var vm = this;


        vm.content = { personalData: true, cost: false };
        // vm.categories = [{ id: 1, description: 'roupas' },
        //     { id: 2, description: 'reciclaveis' }];

        vm.suppliers = [];
        vm.categories = [];

        vm.toggleForm = toggleForm;
        vm.create = create;
        vm.goBack = goBack;

        vm.searchTextSupplier = '';
        vm.searchTextCategory = '';

        vm.selectedSupplier = {};
        vm.selectedCategory = {};

        vm.supplier = {};
        vm.category = {};

        //autocomplete

        vm.querySearchSupplier = querySearchSupplier;
        vm.querySearchCategory = querySearchCategory;

        vm.selectedItemChangeSupplier = selectedItemChangeSupplier;
        vm.selectedItemChangeCategory = selectedItemChangeCategory;

        vm.searchTextChangeSupplier = searchTextChangeSupplier;
        vm.searchTextChangeCategory = searchTextChangeCategory;

        vm.newSupplier = newSupplier;
        vm.newCategory = newCategory;

        (function init() {
            loadSuppliers();
            loadCategories();
        })();


        function loadSuppliers() {
            LoadingPopup.show();
            ProviderService.get().then(function (values) {
                LoadingPopup.hide();

                if (values.error) {
                    toastr.error('Erro ao carregar Fornecedores');
                    return;
                }
                var suppliers = values.supplier;
                if (!suppliers) return;

                var suppliersMap = suppliers.map(function (supplier) {
                    return {
                        value: supplier.id,
                        display: supplier.name
                    };
                });

                vm.suppliers = suppliersMap;


            });

        }

        function loadCategories() {
            LoadingPopup.show();
            ProductService.categories().then(function (result) {
                LoadingPopup.hide();

                if (result.error) {
                    toastr.error('Erro ao carregar Categorias');
                    return;
                }
                var categories = result.productCategory;
                if (!categories) return;

                var categoriesMap = categories.map(function (category) {
                    return {
                        value: category.id,
                        display: category.describe
                    };
                });
                vm.categories = [];
                vm.categories = categoriesMap;


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
                vm.product.size = (vm.product.size || 0) + "";
                vm.product.weight = (vm.product.weight || 0) + "";
                vm.product.id_category = vm.selectedCategory.id;
                vm.product.id_supplier = vm.selectedSupplier.id;
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
        function newSupplier(state) {
            console.log('novo fornecedor');
            // $state.go('app.createSupplier', { 'supplierName': vm.searchTextSupplier });
        }
        function newCategory(state) {
            var category = { 'describe': vm.searchTextCategory };
            LoadingPopup.show();
            ProductService.createCategory(category)
                .then(onCreateCategorySuccess, onCreateCategoryFail);
        }
        function onCreateCategorySuccess(result) {
            LoadingPopup.hide();
            if (result.success)
                toastr.success('Categoria cadastrada com sucesso !');
            else if (result.error)
                toastr.error('Erro ao cadastrar categoria');

            loadCategories();
        }
        function onCreateCategoryFail(result) {
            LoadingPopup.hide();
            toastr.error('Erro ao cadastrar categoria');

        }
        function querySearchSupplier(query) {
            if (!vm.suppliers) {
                toastr.success('Aguarde...');
                return;
            }
            query = angular.lowercase(query);
            var results = query ?
                vm.suppliers.filter(function (item) {
                    return angular.lowercase(item.display).indexOf(query) >= 0;
                })
                : vm.suppliers;

            return results;
        }
        function querySearchCategory(query) {
            if (!vm.categories) {
                toastr.success('Aguarde...');
                return;
            }
            query = angular.lowercase(query);
            var results = query ?
                vm.categories.filter(function (item) {
                    return angular.lowercase(item.display).indexOf(query) >= 0;
                })
                : vm.categories;

            return results;
        }

        function searchTextChangeSupplier(text) {
            $log.info('Text changed to ' + text);
        }
        function searchTextChangeCategory(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChangeSupplier(item) {

            vm.selectedSupplier = item;
            vm.supplier = item;
            $log.info('Item changed to ' + JSON.stringify(item));
        }
        function selectedItemChangeCategory(item) {
            vm.selectedCategory = item;
            vm.category = item;
            $log.info('Item changed to ' + JSON.stringify(item));
        }


    }
})();