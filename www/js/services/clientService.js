(function (){
	'use strict';
	var app = angular.module('services.clientService', []);
	
	app.service('ClientService', ['$http', 'ConstantsService', function ($http, ConstantsService) {
		return {
			Create : function (user) {
				$http.post(ConstantsService.CREATE_USER_URL, user).then(function (e) {
					alert(JSON.stringify(e));
				});
			}
		}
	}]);

})();