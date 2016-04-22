(function (angular) {
    var app = angular.module('services.utilService', []);

    app.constant('BASE_API_URL', 'http://api.artmanager.com.br/');

    app.service('ConstantsService', ConstantsService);
    ConstantsService.$inject = ['BASE_API_URL'];

    function ConstantsService(BASE_API_URL) {
        var baseAutenticacao = BASE_API_URL + 'authentication';
        var baseUser = BASE_API_URL + 'usuarios';
        var baseClient = BASE_API_URL + 'client';
        var baseProvider = BASE_API_URL + 'supplier';

        this.LOGIN_URL = baseAutenticacao;
        this.CREATE_USER_URL = baseUser;
        
        this.CREATE_CLIENT_URL = baseClient;
        this.GET_CLIENT_URL = baseClient;
        
        this.CREATE_PROVIDER_URL = baseProvider;
        this.GET_PROVIDER_URL = baseProvider;

        this.ACCESS_TOKEN_KEY = 'x-access-token';

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
    app.factory('httpRequestInterceptor', httpRequestInterceptor);
    httpRequestInterceptor.$inject = ['ConstantsService'];
    function httpRequestInterceptor(ConstantsService) {
        var defaultToken = 'authentication';
        return {
            request: request
        };

        function request(config) {
            config.headers = { 'x-access-token': defaultToken };
            return config;
        }

    }

})(angular);

