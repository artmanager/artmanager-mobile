(function (){
	'use strict';
	var app = angular.module('services.loginService', []);
	
	app.service('LoginService', ['$http', 'ConstantsService', function ($http, ConstantsService) {
		return {
			login : function (user) {
				
				return $http.post(ConstantsService.LOGIN_URL, user).then(function (token) {
					return token;
				});
				
			},
			logout: function (user) {
				
			}
		}
	}])
})();