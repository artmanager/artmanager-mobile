/* global angular */
(function (angular) {
    angular.module('controllers.productionController', [])
        .controller('ProductionCtrl', ProductionCtrl);

    ProductionCtrl.$inject = ['$state', '$filter', 'ProductionService', 'toastr', 'DateService', 'LoadingPopup'];
    function ProductionCtrl($state, $filter, ProductionService, toastr, DateService, LoadingPopup) {
        var vm = this;
        var statusColor = $filter('statusColor');

        vm.items = [];
        vm.order = '';
        vm.detail = function (item) {
            var obj = JSON.stringify(item);
            $state.go('app.productionDetail', { item: obj });
        };
        vm.filters = getFilters();


        (function init() {
            vm.order = 'delivery_date';
            LoadingPopup.show();
            ProductionService.get().then(function (items) {
                var productions = items.success;
                console.log('productions', productions);
                if (productions)
                    vm.items = productions.map(mapItens);
                LoadingPopup.hide();
            });
        })();

        function mapStatusColor(items) {
            return items.map(function (item) {
                item.status = statusColor(item.status);
                return item;
            });
        }

        function mapItens(params) {
            //['red', 'yellow', 'green'];
            // hoje - 20 dia    s > vermelho
            //20 - 40 -> amarelo
            //40 > verde
            var now = new Date();
            var date = new Date(params.delivery_date);
            params.date = DateService.formatToLocaleDate(date);
            params.status = getStatus(now, date);
            return params;
        }

        function getStatus(now, date) {
            var calc = DateService.daysBetween(now, date);
            if (calc < 20)
                return 0;
            else if (calc > 20 && calc < 40)
                return 1;
            else if (calc > 40)
                return 2;

            return null;
        }
        function getFilters() {
            var filters = [];
            var filter = {};

            filter.value = "delivery_date";
            filter.desc = "Entrega";
            filters.push(filter);

            filter = {};
            filter.value = "name";
            filter.desc = "Nome";
            filters.push(filter);
 
            return filters;
        }


    }
})(angular);   