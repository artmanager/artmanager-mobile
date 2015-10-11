(function (){
	var app = angular.module('services.utilService', []);
	
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