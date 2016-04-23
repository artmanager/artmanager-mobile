(function () {
    'user strict';
    angular.module('controllers.productRegisterController', [])
        .controller('ProductRegisterCtrl', ProductRegisterCtrl);

    ProductRegisterCtrl.$inject = ['toastr', 'ProductService', 'LoadingPopup'];
    function ProductRegisterCtrl(toastr, ProductService, LoadingPopup) {
        var vm = this;
        vm.content = { personalData: true, cost: false };
        vm.categories = [{ id: 1, description: 'roupas' }];
        // vm.product = {
        //     id_product_category: 5,
        //     id_supplier: null,
        //     name: "Product Test",
        //     size: "20cm",
        //     weight: "20cm",
        //     describe: "Produto teste",
        //     cost: 25.2,
        //     sale_cost: 55.1,
        //     quantity: 20
        // };
        vm.toggleForm = function () {
            var isPersonal = vm.content.personalData;
            vm.content.personalData = !isPersonal;
            vm.content.cost = isPersonal;
        };
        vm.create = function () {
            LoadingPopup.show();
            try {
                ProductService.create(vm.product).then(onCreate, onFail);            
            }
            catch(e) {
                console.log(e);
                toastr.error('Erro ao cadastrar produto');
                LoadingPopup.hide();
            }
        };


        vm.goBack = function () {
            vm.toggleForm();
        };
        function onCreate(response) {
            
            if (response.erro)
                toastr.error('Erro ao cadastrar', response.erro);

            LoadingPopup.hide();
        }
        function onFail(response) {
            toastr.error('Erro ao cadastrar', response.erro);
            LoadingPopup.hide();
        }
    }
})();