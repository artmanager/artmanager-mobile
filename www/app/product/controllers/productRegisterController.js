(function () {
    'user strict';
    angular.module('controllers.productRegisterController', [])
        .controller('ProductRegisterCtrl', ProductRegisterCtrl);

    ProductRegisterCtrl.$inject = ['toastr', 'ProductService', 'LoadingPopup', '$state', 'ProviderService'];
    function ProductRegisterCtrl(toastr, ProductService, LoadingPopup, $state, ProviderService) {
        var vm = this;


        vm.content = { personalData: true, cost: false };
        vm.categories = [{ id: 1, description: 'roupas' },
            { id: 2, description: 'reciclaveis' }];

        vm.suppliers = []; 
        // [{ id: 1, description: 'Maria dos remédios' },
        //     { id: 2, description: 'Josefa Silva' }];

        vm.toggleForm = toggleForm;
        vm.create = create;
        vm.goBack = goBack;

        (function init() {
            getSuppliers();
        })();



         function getSuppliers() {
            ProviderService.get().then(function (res) {
                
                vm.suppliers = res.data.supplier.map(function(item){
                    return {id: item.id, description: item.name};
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
    }
})();