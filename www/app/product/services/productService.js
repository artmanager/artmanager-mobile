(function (angular) {
    angular.module('services.productService', [])
        .service('ProductService', ProductService);

    ProductService.$inject = ['$q', '$http', 'ConstantsService', 'AuthService'];
    function ProductService($q, $http, ConstantsService, AuthService) {
        return {
            products: products,
            report: reportProduct,
            categories: categories,
            createCategory: createCategory,
            productsCountMonth: getCountItens,
            create: create
        };

        function create(product) {
            return $http({
                method: 'POST',
                url: ConstantsService.CREATE_PRODUCT_URL,
                data: product,
                headers: AuthService.headers()
            })
                .then(function (params) {
                    return params.data;
                });
        }
        function reportProduct(date) {
            // var itens = {
            //     success: [{
            //         "name": "Samambaia",
            //         "quantity": 100,
            //         "sale_price": 39.30,
            //         "sale_cost": 20.00,
            //         "month": 1,
            //         "year": 2015
            //     }]
            // };
            // var deferred = $q.defer();
            // deferred.resolve(itens);
            // return deferred.promise;

            return $http({
                method: 'POST',
                url: ConstantsService.REPORT_PRODUCTS,
                data: date,
                headers: AuthService.headers()
            })
                .then(function (params) {
                    return params.data;
                });
        }
        function products() {
            return $http({
                method: 'GET',
                url: ConstantsService.GET_PRODUCT_URL,
                headers: AuthService.headers()
            })
                .then(function (params) {
                    return params.data;
                });
            
        }

        function createCategory(data) {
            return $http({
                method: 'POST',
                url: ConstantsService.CREATE_CATEGORIES_PRODUCTS,
                data: data,
                headers: AuthService.headers()
            })
                .then(function (params) {
                    return params.data;
                });
        }
        function categories() {
            return $http({
                method: 'GET',
                url: ConstantsService.GET_CATEGORIES_PRODUCTS,
                headers: AuthService.headers()
            })
                .then(function (params) {
                    return params.data;
                });
        }
        function getCountItens(obj) {
            var itens = [];
            var defer = $q.defer();

            defer.resolve([]);
            return defer.promise;
            // return $http({
            //     method: 'GET',
            //     data: obj,
            //     url: ConstantsService.GET_PRODUCT_URL,
            //     headers: AuthService.headers()
            // })
            //     .then(function (params) {
            //         return params.data;
            //     });

        }
    }
})(angular);