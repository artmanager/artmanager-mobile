(function () {
    'user strict';
    angular.module('controllers.productRegisterController', [])
        .controller('ProductRegisterCtrl', ProductRegisterCtrl);

    ProductRegisterCtrl.$inject = ['toastr', 'ProductService', 'LoadingPopup', '$state'];
    function ProductRegisterCtrl(toastr, ProductService, LoadingPopup, $state) {
        var vm = this;


        vm.content = { personalData: true, cost: false };
        vm.categories = [{ id: 1, description: 'roupas' },
                         { id: 2, description: 'reciclaveis' }];
                         
        vm.suppliers = [{ id: 1, description: 'Maria dos remédios' },
                        { id: 2, description: 'Josefa Silva' }];

        vm.toggleForm = toggleForm;
        vm.create = create;
        vm.goBack = goBack;


        function toggleForm() {
            var isPersonal = vm.content.personalData;
            vm.content.personalData = !isPersonal;
            vm.content.cost = isPersonal;
        }

        function create() {
            // toastr.success('Produto cadastrado com sucesso!');
            // setTimeout(function (){
            //     $state.go('app.orders');
            // },1500);
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