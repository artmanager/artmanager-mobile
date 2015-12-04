(function (){
	'use strict';
	var app = angular.module('services.clientService', []);
	
	app.service('clientService', ['$http', 'ConstantsService', function ($http, ConstantsService) {
		return {
			Create : function (user) {
				$http.post(ConstantsService.CREATE_USER_URL, user).then(function (e) {
					alert(JSON.stringify(e));
				});
			}
		}
	}]);

})();