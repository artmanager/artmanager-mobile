(function (angular) {
    var app = angular.module('services.utilService', []);

    app.constant('BASE_API_URL', 'http://api.artmanager.com.br/');

    app.service('ConstantsService', ConstantsService);
    ConstantsService.$inject = ['BASE_API_URL'];

    function ConstantsService(BASE_API_URL) {
        var baseAutenticacao = BASE_API_URL + 'authentication';
        var baseUser = BASE_API_URL + 'users';
        var baseClient = BASE_API_URL + 'client';
        var baseProvider = BASE_API_URL + 'supplier';
        var baseProduct = BASE_API_URL + 'product';
        var baseOrder= BASE_API_URL + 'which';
        var baseProduction = BASE_API_URL + 'production';
        
        this.LOGIN_URL = baseAutenticacao;
        this.CREATE_USER_URL = baseUser;
        
        this.CREATE_CLIENT_URL = baseClient;
        this.GET_CLIENT_URL = baseClient;
        
        this.CREATE_PROVIDER_URL = baseProvider;
        this.GET_PROVIDER_URL = baseProvider;

        this.CREATE_PRODUCT_URL = baseProduct;
        this.GET_PRODUCT_URL = baseProduct;
        
        this.CREATE_ORDER_URL = baseOrder;
        this.ACCESS_TOKEN_KEY = 'x-access-token';

        this.UPDATE_STATUS_PRODUCTION = baseProduction;
    }

    app.factory('LocalStorageService', LocalStorageService);
    function LocalStorageService() {
        return {
            get: function (key) {
                return localStorage[key] || null;
            },
            set: function (key, value) {
                localStorage[key] = value;
            },
            clear: function (key) {
                localStorage[key] = null;
            }
        };
    }

    app.factory('UtilService', UtilService);
    function UtilService() {
        return {
            removeCSS: removeCSS
        };
        
        function removeCSS(cssPath) {
            var node = document.querySelector("[href='" + cssPath + "']");
            node.parentNode.removeChild(node);
        }
    }
    app.factory('LoadingPopup', LoadingPopup);
    LoadingPopup.$inject = ['$ionicLoading'];
    function LoadingPopup($ionicLoading) {
        return {
            show: show,
            hide: hide
        };
        
        function hide() {
            $ionicLoading.hide();
        }
        
        function show() {
            $ionicLoading.show({
                template: '<md-progress-circular md-mode="indeterminate" md-diameter="96"></md-progress-circular>',
                showBackdrop: false,
                hideOnStateChange: true,
                animation: 'fade-in',

            });
            
        }
    }
    
    app.factory('AuthService', AuthService);
    function AuthService() {
        return {
          headers: headers  
        };
        function headers() {
            return { 'x-access-token': localStorage.token };
        } 
    }
    
    app.factory('DateService', DateService);
    function DateService() {
        return { 
            daysBetween : daysBetween,
            formatToLocaleDate : formatToLocaleDate 
        };
        
        function treatAsUTC(date) {
            var result = new Date(date);
            result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
            return result;
        }

        function daysBetween(startDate, endDate) {
            var millisecondsPerDay = 24 * 60 * 60 * 1000;
            return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
        }
        function formatToLocaleDate(params) {
            var month = (params.getMonth() + 1);
            var formatedMonth = month >= 10 ? month : "0" + month;
            var date = params.getDate() + "/" + formatedMonth + "/"+ params.getFullYear();
            
            return date;   
        }
    }
    //  app.factory('httpRequestInterceptor', httpRequestInterceptor);
    // httpRequestInterceptor.$inject = ['ConstantsService'];
    // function httpRequestInterceptor(ConstantsService) {
    //     var defaultToken = 'authentication';
    //     return {
    //         request: request
    //     };

    //     function request(config) {
    //         config.headers = { 'x-access-token': defaultToken };
    //         return config;
    //     }

    // }

})(angular);

