(function (angular) {
    var app = angular.module('filters.commonFilters', []);
    app.filter('statusColor', statusColor);
    
    function statusColor () {
        function colorOrderStatus(status) {
           if(typeof status === "string") throw new TypeError("statusColor - The status must be an integer");
           if(status > colors.length) throw new  RangeError("statusColor - the informed status is incorrect");
                
            return colors[status];
        } 
       var colors = ['red', 'yellow', 'green'];
       return colorOrderStatus; 
    }    
})(angular);
