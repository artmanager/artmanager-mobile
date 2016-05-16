(function (angular) {
    angular.module('controllers.orderListController', [])
        .controller('OrderListCtrl', OrderListCtrl);

    OrderListCtrl.$inject = ['ProductionService', '$log', '$state', 'ClientService', 'ProductService', 'toastr', 'LoadingPopup'];

    function OrderListCtrl(ProductionService, $log, $state, ClientService, ProductService, toastr, LoadingPopup) {
         
    }

})(angular);
