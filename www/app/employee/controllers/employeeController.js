(function (angular) {
    angular.module('controllers.employeeController', [])
        .controller('EmployeeCtrl', EmployeeCtrl);

    EmployeeCtrl.$inject = ['$timeout', 'EmployeeService', '$state'];
    function EmployeeCtrl($timeout, EmployeeService, $state) {

        var vm = this;

        vm.items = [];
        vm.itemsFilter = [];
        vm.order = "fornecedor";
        vm.ascending = true;
        vm.initialDate = null;
        vm.finalDate = null;
        vm.search = search;
        vm.toDetail = toDetail;
        vm.filters = getFilters();
        (function init() {
            loadEmployees();
        })();

        function loadEmployees() {
            var initialDate = vm.initialDate || new Date(0);
            var finalDate = vm.finalDate || new Date();
            var obj = {
                'dt_from': initialDate.toISOString(),
                'dt_to': finalDate.toISOString()
            };
            console.log('obj', obj);
            
            EmployeeService.reportSupplier(obj).then(function (itens) {
                var items = itens.success;
                vm.items = items;
                console.log('items', items);
                // vm.itemsFilter = items;
            });
        }
        function getFilters() {
            var filters = [];
            var filter = {};

            filter = {};
            filter.value = "supplier";
            filter.desc = "Nome";
            filters.push(filter);


            filter = {};
            filter.value = "total";
            filter.desc = "Valor a Receber";
            filters.push(filter);

            return filters;
        }
        function toDetail(item) {
            var detail = JSON.stringify(item);
            $state.go('app.employeesDetail', { item: detail });
        }
        function search() {
            loadEmployees();
            // var itens = angular.copy(vm.itemsFilter);

            // var initialDate = vm.initialDate || new Date(0);
            // var finalDate = vm.finalDate || new Date();

            // initialDate.setMonth(initialDate.getMonth() - 1);
            // finalDate.setMonth(finalDate.getMonth() - 1);
            // var filteredItens = itens.filter(function (item) {
            //     var dateItem = new Date(item.year, (item.month), 01);
            //     console.log('dateItem', dateItem);
            //     return dateItem > initialDate && dateItem < finalDate;

            // });
            // console.log('filteredItens', filteredItens);
            // vm.items = filteredItens;

        }


    }



})(angular);