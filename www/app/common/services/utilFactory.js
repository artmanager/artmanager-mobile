(function(angular) {
    var app = angular.module('services.utilService', []);

    app.constant('BASE_API_URL', 'http://api.artmanager.com.br:3000/');
    // app.constant('BASE_API_URL', 'localhost:3000/');

    app.service('ConstantsService', ConstantsService);
    ConstantsService.$inject = ['BASE_API_URL'];

    function ConstantsService(BASE_API_URL) {
        var baseAutenticacao = BASE_API_URL + 'authentication';
        var baseUser = BASE_API_URL + 'usuarios';
        var baseClient = BASE_API_URL + 'cliente';

        this.LOGIN_URL = baseAutenticacao;
        this.CREATE_USER_URL = baseUser;
        this.CREATE_CLIENT_URL = baseClient;
        this.GET_CLIENT_URL = baseClient;
        this.ACCESS_TOKEN_KEY = 'x-access-token';

    }

    app.factory('LocalStorageService', LocalStorageService);
    function LocalStorageService() {
        return {
            get: function(key) {
                return localStorage[key] || null;
            },
            set: function(key, value) {
                localStorage[key] = value;
            },
            clear: function(key) {
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
    app.factory('httpRequestInterceptor', httpRequestInterceptor);
     httpRequestInterceptor.$inject = ['ConstantsService'];
    function httpRequestInterceptor(ConstantsService) {
        var defaultToken = 'authentication';
        return {
            request: request
        };

        function request(config) {
            config.headers = { 'x-access-token':  defaultToken }
            return config;
        }
          
    }

})(angular);