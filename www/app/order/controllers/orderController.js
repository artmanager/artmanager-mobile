/* global angular */
(function (angular) {
    var app = angular.module('controllers.orderController', []);
    app.controller('OrderCtrl', ['$scope', '$timeout', '$filter', 'ionicMaterialMotion', 'ionicMaterialInk', 'OrderService', function ($scope, $timeout, $filter,ionicMaterialMotion, ionicMaterialInk, OrderService) {
        var self = $scope;
        var statusColor = $filter('statusColor');

        self.items = [];
        self.order = 'status';
        //self.ascending = true;
        
        self.filters = getFilters();
        self.init = (function () {
            OrderService.get().then(function (items) {
                self.items = mapStatusColor(items);
               console.log(items); 
            });
        })();
        
       function mapStatusColor (items) {
           return items.map(function (item) {
               item.status = statusColor(item.status);
               return item;
           });
       }
        
        function getFilters () {
            var filters = [];
            var filter = {};
            
            filter.value= "name";
            filter.desc = "Nome"; 
            filters.push(filter);
            
             filter = {};
            filter.value= "status";
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