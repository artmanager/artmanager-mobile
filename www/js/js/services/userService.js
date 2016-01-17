(function (){
	'use strict';
	var app = angular.module('services.userService', []);
	
	app.service('UserService', ['$http', 'ConstantsService', function ($http, ConstantsService) {
		return {
			Create : function (user) {
				$http.post(ConstantsService.CREATE_USER_URL, user).then(function (obj) {
					if (obj.data.erro != undefined)
						alert(obj.data.erro);
					else
						alert('Cadastro efetuado com sucesso.');
				});
			}
		}
	}]);

})();