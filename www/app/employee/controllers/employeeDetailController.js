(function (angular) {
    var app = angular.module('controllers.employeeDetailController', []);
    app.controller('EmployeeDetailCtrl', ['$scope', '$stateParams', 'EmployeeService', function ($scope, $stateParams, EmployeeService) {
        var self = $scope;
        var id = $stateParams.id;
        
        self.item = {};
        EmployeeService.employee(id).then(function (item) {
           self.item = item;
           console.log(item);
        });
        
    }]);
})(angular);