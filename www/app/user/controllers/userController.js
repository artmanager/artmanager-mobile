(function () {
    angular.module('controllers.userController', ['ngSanitize'])
        .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$rootScope', '$state', '$timeout', 'UserService', 'toastr', 'LoadingPopup'];

    function UserCtrl($rootScope, $state, $timeout, UserService, toastr, LoadingPopup) {
        var vm = this;

        // vm.profiles = [{ id: 0, description: 'Administrador' }, { id: 1, description: 'Usuario' }];

        vm.create = function () {
            console.log(vm.user);
            LoadingPopup.show();
            vm.user.profile = 1;
            var user = { "user": vm.user };
            UserService.create(user).then(onSuccess, onError);
        };


        function onSuccess(result) {
            LoadingPopup.hide();
            if (result.error) {
                toastr.error('Erro ao realizar sua solicitação!');
                return;
            }
            toastr.success('Usuario cadastrado com sucesso!');
            setTimeout(function () {
                $state.go('app.orders');
            }, 1000);
        }
        function onError() {
            LoadingPopup.hide();
            toastr.error('Não foi possivel conectar ao servidor.', 'Erro!');
        }
    }
})();   