(function (angular) {
    var app = angular.module('controllers.employeeController', []);
    app.controller('EmployeeCtrl', ['$scope', '$timeout', 'EmployeeService', function ($scope, $timeout, EmployeeService) {
        // Set Header
        var self = $scope;

        self.items = [];
        self.order = "nome";
        self.ascending = true;

        self.filters = getFilters();
        self.init = (function () {
            EmployeeService.employess().then(function (itens) {
                self.items = itens;
            });
        })();

        function getFilters() {
            var filters = [];
            var filter = {};

            filter.value = "nome";
            filter.desc = "Nome";
            filter.selected = true;
            filters.push(filter);

            filter = {};
            filter.value = "fornecedor";
            filter.desc = "Fornecedor";
            filters.push(filter);


            filter = {};
            filter.value = "valorReceber";
            filter.desc = "Valor a Receber";
            filters.push(filter);

            return filters;
        }
        
        

    }]);



})(angular);