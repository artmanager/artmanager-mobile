(function (angular) {
    angular.module('controllers.employeeDetailController', [])
        .controller('EmployeeDetailCtrl', EmployeeDetailCtrl);
    EmployeeDetailCtrl.$inject = [ '$stateParams', 'EmployeeService', '$state'];

    function EmployeeDetailCtrl($stateParams, EmployeeService, $state) {
        var vm = this;
        var item = $stateParams.item;
        vm.item = JSON.parse(item);
        vm.backToEmployees = backToEmployees;
        vm.dateRef = getDateRef();
        
        function getDateRef() {
            var month = vm.item.month >= 10 ? vm.item.month : "0"+vm.item.month ;
            return month + "/"+vm.item.year; 
        }
        function backToEmployees() {
            $state.go('app.employees');
        }
    }
})(angular);