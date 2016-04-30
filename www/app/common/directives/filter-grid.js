(function (angular) {
    angular.module('directives.filter-grid', [])
        .directive('filterGrid', filterGrid);


    function filterGrid() {
        function link(scope, iElement, iAttrs, controller) {

            scope.ascending = scope.$parent.ascending || false;

            scope.order = scope.$parent.order || scope.filters[0].value;
            scope.$watch('order', function (value) {

                scope.$parent.order = value;
                scope.order = value;
                console.log(value);
            });
            scope.$watch('ascending', function (value) {

                scope.$parent.ascending = value;
                scope.ascending = value;
                console.log(value);
            });
        }
        var filter = {
            restrict: 'E',
            templateUrl: 'app/common/directives/templates/filter-grid.html',
            require: "^ngController",
            scope: {
                filters: '=',
                order: '='
            },
            link: link
        };

        return filter;
    }

})(angular);