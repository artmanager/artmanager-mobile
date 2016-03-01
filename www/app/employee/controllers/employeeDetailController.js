(function (angular) {
    angular.module('controllers.employeeDetailController', [])
        .controller('EmployeeDetailCtrl', EmployeeDetailCtrl);
    EmployeeDetailCtrl.$inject = ['$scope', '$stateParams', 'EmployeeService'];

    function EmployeeDetailCtrl($scope, $stateParams, EmployeeService) {
        var self = $scope;
        var id = $stateParams.id;

        self.item = {};
        EmployeeService.employee(id).then(function (item) {
            self.item = item;
            console.log(item);
        });

    }
})(angular);