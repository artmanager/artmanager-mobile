(function (angular) {
	'use strict';
	var app = angular.module('services.clientService', []);
	
	app.service('ClientService', ['$http', 'ConstantsService', function ($http, ConstantsService) {
		
        
        return {
			Create : create
		}
        
                
        function create (user) {
				return $http.post(ConstantsService.CREATE_CLIENT_URL, user).then(function (e) {
					if (!e.data.success)
						alert('Erro ao cadastrar');
					else 
						alert('Usuario cadastrado com sucesso');
				});
			};
            
         function get() {
             return 
         }
	}]);

})(angular);