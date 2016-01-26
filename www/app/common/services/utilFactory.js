(function (){
	var app = angular.module('services.utilService', []);
	
	app.constant('BASE_API_URL', 'http://localhost:3000/');
	// app.constant('BASE_API_URL', 'localhost:3000/');

	app.service('ConstantsService', ['BASE_API_URL', function (BASE_API_URL) {
		this.LOGIN_URL = BASE_API_URL + 'autenticacao';
		this.CREATE_USER_URL = BASE_API_URL + 'usuarios';
		this.CREATE_CLIENT_URL = BASE_API_URL + 'cliente'
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
	
})();