(function (angular) {
    angular.module('controllers.boxClosingController', [])
        .controller('BoxClosingCtrl', BoxClosingCtrl);
    BoxClosingCtrl.$inject = ['BoxClosingService', 'toastr', 'LoadingPopup'];

    function BoxClosingCtrl(BoxClosingService, toastr, LoadingPopup) {
        var vm = this;
        vm.items = [];
        vm.itemsFilter = [];
        vm.initialDate = null;
        vm.finalDate = null;
        vm.search = search;
        vm.filters = getFilters();
        vm.dateRef = getDateRef;

        (function init() {
            loadBoxItens();
        })();
        function loadBoxItens() {
            LoadingPopup.show();
            var initialDate = vm.initialDate || new Date(0);
            var finalDate = vm.finalDate || new Date();
            var obj = {
                'dt_from': initialDate.toISOString(),
                'dt_to': finalDate.toISOString()
            };
            BoxClosingService.get(obj).then(onGetSuccess, onGetError);
        }

        function getDateRef(month, year) {
            month = month >= 10 ? month : "0" + month;
            return month + "/" + year;
        }
        function getFilters() {
            var filters = [];
            var filter = {};

            filter = {};
            filter.value = "date";
            filter.desc = "Data";
            filters.push(filter);


            filter = {};
            filter.value = "total";
            filter.desc = "Total";
            filters.push(filter);

            filter = {};
            filter.value = "totalCommission";
            filter.desc = "Comissoes";
            filters.push(filter);
            
            filter = {};
            filter.value = "totalSaleProducts";
            filter.desc = "Vendas";
            filters.push(filter);
            
            filter = {};
            filter.value = "totalProductionProducts";
            filter.desc = "Produção";
            filters.push(filter);
            
            filter = {};
            filter.value = "totalProductionPending";
            filter.desc = "Pendencias";
            filters.push(filter);
            
            return filters;
        }
        function search() {
            loadBoxItens();
            // var itens = angular.copy(vm.itemsFilter);

            // var initialDate = vm.initialDate || new Date(0);
            // var finalDate = vm.finalDate || new Date();

            // var filteredItens = itens.filter(function (item) {
            //     var dateItem = new Date(item.year, (item.month), 01);
            //     return dateItem > initialDate && dateItem < finalDate;

            // });
            // vm.items = filteredItens;

        }
        function onGetSuccess(result) {
            LoadingPopup.hide();
            console.log('result.success', result.success);
            var itens = result.success.map(function (item) {
                item.date = getDateRef(item.month, item.year);
                return item;
            });
            
            if(itens[0].total === null) {
                vm.items = [];
                return;
            }
            vm.items = itens;
            vm.itemsFilter = itens;
        }


        function onGetError(result) {
            LoadingPopup.hide();
            toastr.error('Não foi possivel carregar os itens');
        }
    }
})(angular);