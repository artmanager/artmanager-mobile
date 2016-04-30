/* global angular */
(function (angular) {
    angular.module('controllers.orderController', [])
        .controller('OrderCtrl', OrderCtrl);
        
    OrderCtrl.$inject = ['$scope', '$state', '$filter', 'OrderService', 'toastr'];
    function OrderCtrl($scope, $state, $filter, OrderService, toastr) {
        var self = $scope;
        var statusColor = $filter('statusColor');

        self.items = [];
        self.order = 'status';
        //self.ascending = true;
        self.filters = getFilters();
        self.init = (function () {
            OrderService.get().then(function (items) {
                self.items = items;
                //    console.log(items); 
            });
        })();

        function mapStatusColor(items) {
            return items.map(function (item) {
                item.status = statusColor(item.status);
                return item;
            });
        }

        function getFilters() {
            var filters = [];
            var filter = {};

            filter.value = "name";
            filter.desc = "Nome";
            filters.push(filter);

            filter = {};
            filter.value = "status";
            filter.desc = "Status";
            filters.push(filter);


            filter = {};
            filter.value = "date";
            filter.desc = "Data de Entrega";
            filters.push(filter);

            return filters;
        }


    }
})(angular);   