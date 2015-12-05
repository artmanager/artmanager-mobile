(function (){
	'use strict';
	var app = angular.module('services.loginService', []);
	
	app.service('LoginService', ['$http', 'ConstantsService', function ($http, ConstantsService) {
		return {
			login : function (user) {
				var defer = Promise.defer();
				defer.resolve(btoa('test'));
				//return defer.promise;
				
				 return $http.post(ConstantsService.LOGIN_URL, user).then(function (obj) {
				 	if (obj.data.erro != undefined)
				 	{
				 		alert(obj.data.erro);
				 	}
				 	else
				 		return obj.data.token;
				 });
				
			},
			logout: function (user) {
				
			}
		}
	}])
})();