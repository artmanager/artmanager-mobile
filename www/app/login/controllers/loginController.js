(function () {
    'user strict';
    var app = angular.module('controllers.loginController', []);

    app.controller('LoginCtrl', ['$state', 'LoginService', 'LocalStorageService', 'UtilService',
        function ($state, LoginService, LocalStorageService, UtilService) {
            var vm  = this;

            vm.user = { 'name': '', 'password': '' };
            
            vm.login = function (user) {
                var data = { 'data': btoa(vm.user.name + "-" + vm.user.password) };
                
                // LoginService.login(data).then(function (token) {
                //     if(token != null){
                //         LocalStorageService.set('token',token);
                
                UtilService.removeCSS("app/login/login.css");
                $state.go('app.orders');
                //     }

                // });
            }


        }]);
})()