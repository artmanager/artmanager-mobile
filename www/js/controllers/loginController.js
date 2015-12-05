(function (){
    'user strict';
    var app = angular.module('controllers.loginController', []);

    app.controller('LoginCtrl', ['$scope','$state' , '$timeout', '$stateParams', 'ionicMaterialInk', 'LoginService', 'LocalStorageService', 
        function($scope, $state, $timeout, $stateParams, ionicMaterialInk, LoginService, LocalStorageService) {
            //////LAYOUT
            // if(LocalStorageService.get('token') != null) {
            //     $state.go('app.dashboard');   
            // }
            
            
            $scope.$parent.clearFabs();
            $timeout(function() {
                $scope.$parent.hideHeader();
            }, 0);
            ionicMaterialInk.displayEffect();
            /// </LAYOUT />
            
            $scope.use = {'name': '', 'password': ''};
                            
            $scope.login = function (user) {
                var data = {'data': btoa(user.name + "-"+ user.password)};
                
                LoginService.login(data).then(function (token) {
                    if(token != null){
                        LocalStorageService.set('token',token);
                        alert(token)
                        $state.go('app.dashboard');
                    }

                });
            }
            
            
        }]);
})()