(function () {
    'user strict';
    angular.module('controllers.productRegisterController', [])
        .controller('ProductRegisterCtrl', ProductRegisterCtrl);

    ProductRegisterCtrl.$inject = ['toastr', 'ProductService', 'LoadingPopup'];
    function ProductRegisterCtrl(toastr, ProductService, LoadingPopup) {
        var vm = this;
        vm.content = content;
        vm.categories = categories;
        vm.suppliers = suppliers;
        vm.toggleForm = toggleForm;
        vm.create = create;
        vm.goBack = goBack;

        var content = { personalData: true, cost: false };

        var categories = [{ id: 1, description: 'roupas' },
            { id: 2, description: 'reciclaveis' }];

        var suppliers = [{ id: 1, description: 'Maria dos remédios' },
            { id: 2, description: 'Josefa Silva' }];

        function toggleForm() {
            var isPersonal = vm.content.personalData;
            vm.content.personalData = !isPersonal;
            vm.content.cost = isPersonal;
        }

        function create() {
            LoadingPopup.show();
            try {
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
            if (response.erro)
                toastr.error('Erro, contate o suporte.', 'Não foi possivel cadastrar');

            LoadingPopup.hide();
        }
        function onFail(response) {
            toastr.error('Erro, contate o suporte.', 'Não foi possivel cadastrar');
            LoadingPopup.hide();
        }
    }
})();