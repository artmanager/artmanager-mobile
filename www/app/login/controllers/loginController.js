(function (){
    'user strict';
    var app = angular.module('controllers.loginController', []);

    app.controller('LoginCtrl', ['$scope','$state' , '$timeout', '$stateParams', 'LoginService', 'LocalStorageService', 
        function($scope, $state, $timeout, $stateParams, LoginService, LocalStorageService) {
            
            
            $scope.use = {'name': '', 'password': ''};
                            
            $scope.login = function (user) {
                var data = {'data': btoa(user.name + "-"+ user.password)};
                
                // LoginService.login(data).then(function (token) {
                //     if(token != null){
                //         LocalStorageService.set('token',token);
                        $state.go('app.orders');
                //     }

                // });
            }
            
            
        }]);
})()