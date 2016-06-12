(function (angular) {
    angular.module('controllers.boxClosingController', [])
        .controller('BoxClosingCtrl', BoxClosingCtrl);
    BoxClosingCtrl.$inject = ['BoxClosingService', 'toastr', 'LoadingPopup', 'ProductService'];

    function BoxClosingCtrl(BoxClosingService, toastr, LoadingPopup, ProductService) {
        var vm = this;
        vm.items = [];
        vm.itemsFilter = [];
        vm.showBoxClosing = true;
        vm.showReportProducts = showReportProducts;
        vm.initialDate = null;
        vm.finalDate = null;
        vm.search = search;
        vm.filters = getFilters();
        vm.dateRef = getDateRef;
        vm.dateItems = null;
        vm.products = [];
        vm.back = back;
        (function init() {
            loadBoxItens();
        })();
        function getDateRef() {
            var initialDate = vm.initialDate || undefined;
            var finalDate = vm.finalDate || undefined;
            var str = initialDate ? initialDate.toLocaleDateString() : "";
            str += finalDate ? ((initialDate ? " a " : "") + finalDate.toLocaleDateString()) : "";
            return str;
        }
        function loadBoxItens() {
            LoadingPopup.show();
            var obj = getObjectFilter();
            BoxClosingService.get(obj).then(onGetSuccess, onGetError);
        }
        function getObjectFilter() {
            var initialDate = vm.initialDate || new Date(0);
            var finalDate = vm.finalDate || new Date();
            var obj = {
                'dt_from': initialDate.toISOString(),
                'dt_to': finalDate.toISOString()
            };
            return obj;
        }
        // function getDateRef(month, year) {
        //     month += 1;
        //     month = month >= 10 ? month : "0" + month;
        //     return month + "/" + year;
        // }
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
                item.date = getDateRef();
                // if (item.month) item.date = getDateRef(item.month, item.year);

                // else {

                //     vm.dateItems = str;
                // }
                return item;
            });

            if (itens[0].total === null) {
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
        function showReportProducts() {
            vm.showBoxClosing = false;
            var obj = getObjectFilter();
            LoadingPopup.show();
            ProductService.report(obj).then(function (result) {
                if (result.error) {
                    toastr.error('Erro ao carregar relatorio de produtos');
                    return;
                }
                console.log('result', result);

                vm.products = result.success.map(function (e) {
                    e.date = getDateRef();
                    return e;
                });
                LoadingPopup.hide();
            });

        }
        function back() {
            vm.showBoxClosing = true;
        }
    }
})(angular);