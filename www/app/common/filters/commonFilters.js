(function (angular) {
    var app = angular.module('filters.commonFilters', []);
    app.filter('filterStatusColor', function () {
       var colors = ['red', 'yellow', 'green'];
       return function colorOrderStatus(status) {
           if(status > colors.length) throw Error("O status informado é incorreto");
           
            return colors[status];
        }; 
    });
    
})(angular);