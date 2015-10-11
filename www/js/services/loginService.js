(function (){
	'use strict';
	var app = angular.module('services.loginService', []);
	
	app.service('LoginService', ['$http', function ($http) {
		return {
			login : function (user) {
				var defer = Promise.defer();
				console.log('in Login Service: %s, %s', user.name, user.password)
				defer.resolve(btoa('test'));
				return defer.promise;
				
				
			},
			logout: function (user) {
				
			}
		}
	}])
})();