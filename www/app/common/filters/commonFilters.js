(function (angular) {
    var app = angular.module('filters.commonFilters', []);
    app.filter('filterStatusColor', function () {
       var colors = ['red', 'yellow', 'green'];
       return function colorOrderStatus(status) {
           if(typeof status === "string") throw new TypeError("O status deve ser um inteiro");
           if(status > colors.length) throw new  RangeError("O status informado é incorreto");
                
            return colors[status];
        }; 
    });
    
})(angular);
