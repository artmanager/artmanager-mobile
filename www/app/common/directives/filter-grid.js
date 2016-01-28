(function (angular) {
    var app = angular.module('directives.filter-grid', []);
    
    app.directive('filterGrid', function () {
       return {
            restrict : 'E',
           templateUrl: 'app/common/directives/templates/filter-grid.html',
            
        //    require: "filters",
           scope: {
               filters: '@filters',
               orderBy: '@orderBy'
           },
           link: function (scope, iElement, iAttrs) {
               
               debugger;
               scope.filters = JSON.parse(iAttrs.filters);
               scope.ascending = true;
               scope.orderBy = iAttrs.orderBy || scope.filters[0].value;
           }
       };
    });
    
})(angular);