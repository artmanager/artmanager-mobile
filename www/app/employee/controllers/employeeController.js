(function (angular) {
    angular.module('controllers.employeeController', [])
        .controller('EmployeeCtrl', EmployeeCtrl);

    EmployeeCtrl.$inject = ['$scope', '$timeout', 'EmployeeService'];
    function EmployeeCtrl($scope, $timeout, EmployeeService) {
        
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

    }



})(angular);