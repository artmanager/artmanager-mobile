(function (angular){
	var app = angular.module('services.utilService', []);
	
	app.constant('BASE_API_URL', 'http://localhost:3000/');
	// app.constant('BASE_API_URL', 'localhost:3000/');

	app.service('ConstantsService', ['BASE_API_URL', function (BASE_API_URL) {
        var baseAutenticacao = BASE_API_URL + 'autenticacao';
        var baseUser = BASE_API_URL + 'usuarios';
        var baseClient =   BASE_API_URL + 'cliente';
        
		this.LOGIN_URL = baseAutenticacao;
		this.CREATE_USER_URL = baseUser;
		this.CREATE_CLIENT_URL = baseClient;
        this.GET_CLIENT_URL = baseClient;
	}]);

	app.factory('LocalStorageService', [function (){
		return {
				get : function (key){
						return localStorage[key] || null;
				},
				set : function (key, value) {
					localStorage[key] = value;
				},
				clear : function (key) {
					localStorage[key] = null;
				}
				
				
			}
	}]);
	
})(angular);