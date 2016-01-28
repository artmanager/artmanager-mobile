/* global angular */
(function (angular) {
    var app = angular.module('controllers.orderController', []);
    app.controller('OrderCtrl', ['$scope', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk', 'OrderService', function ($scope, $timeout, ionicMaterialMotion, ionicMaterialInk, OrderService) {
        var self = $scope;
        self.items = [];
        self.order = 'color.val';
        self.ascending = true;
        
        self.filters = getFilters();
        self.init = (function () {
            OrderService.get().then(function (items) {
                self.items = items;
            });
        })();

        function getFilters () {
            var filters = [];
            var filter = {};
            
            filter.value= "name";
            filter.desc = "Nome"; 
            filter.selected = true;
            filters.push(filter);
            
             filter = {};
            filter.value= "color.val";
            filter.desc = "Status";
            filters.push(filter);
            
            
            filter = {};
            filter.value= "date";
            filter.desc = "Data de Entrega";
            filters.push(filter);
            
            return filters;
        };
        //animations
        (function animations() {

            $scope.$parent.showHeader();
            $scope.$parent.clearFabs();
            $scope.$parent.setHeaderFab('left');

            // Delay expansion
            $timeout(function () {
                $scope.isExpanded = true;
                // $scope.$parent.setExpanded(true);
            }, 300);

            // Set Motion
            ionicMaterialMotion.fadeSlideInRight();

            // Set Ink
            ionicMaterialInk.displayEffect();
        })();


    }]);
})(angular);   