(function () {
    'user strict';
    var app = angular.module('controllers.loginController', []);

    app.controller('LoginCtrl', ['$scope', '$state', '$timeout', '$stateParams', 'LoginService', 'LocalStorageService', 'UtilService',
        function ($scope, $state, $timeout, $stateParams, LoginService, LocalStorageService, UtilService) {


            $scope.user = { 'name': '', 'password': '' };

            $scope.login = function (user) {
                var data = { 'data': btoa(user.name + "-" + user.password) };
                
                // LoginService.login(data).then(function (token) {
                //     if(token != null){
                //         LocalStorageService.set('token',token);
                // var a = document.querySelector('body > ion-nav-view > div > link')
                // a.parentNode.removeChild(a)
                UtilService.removeCSS("app/login/login.css");
                $state.go('app.orders');
                //     }

                // });
            }


        }]);
})()