(function (angular) {
    var app = angular.module('directives.filter-grid', []);

    app.directive('filterGrid', function () {

        return {
            restrict: 'E',
            templateUrl: 'app/common/directives/templates/filter-grid.html',
            require: "^ngController",
            scope: {
                filters: '=',
                order: '='
            },
            link: function (scope, iElement, iAttrs, controller) {

                scope.ascending = scope.$parent.ascending || true;
               
                scope.order = scope.$parent.order || scope.filters[0].value;
                // console.log(scope.order);
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
        };


    });

})(angular);