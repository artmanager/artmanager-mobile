(function (angular) {
    var app = angular.module('controllers.employeeController', []);
    app.controller('EmployeeCtrl', ['$scope','$timeout', 'ionicMaterialMotion', 'ionicMaterialInk','EmployeeService', function ($scope, $timeout,ionicMaterialMotion, ionicMaterialInk, EmployeeService) {
        // Set Header
        var self = $scope;
        
        self.$parent.showHeader();
        self.$parent.clearFabs();
        self.$parent.setHeaderFab('left');

        $timeout(function() {
            self.isExpanded = true;
            self.$parent.setExpanded(true);
        }, 300);

        ionicMaterialMotion.fadeSlideInRight();

        ionicMaterialInk.displayEffect();


        self.items = [];
        self.order = "nome";
        self.ascending = true;
        
        self.filters = getFilters();
        self.init = (function () {
            EmployeeService.employess().then(function (itens) {
                self.items = itens;
                
            });
        })();
        
        function getFilters () {
            var filters = [];
            var filter = {};
            
            filter.value= "nome";
            filter.desc = "Nome"; 
            filter.selected = true;
            filters.push(filter);
            
             filter = {};
            filter.value= "fornecedor";
            filter.desc = "Fornecedor";
            filters.push(filter);
            
            
            filter = {};
            filter.value= "valorReceber";
            filter.desc = "Valor a Receber";
            filters.push(filter);
            
            return filters;
        };
    }]);



})(angular);