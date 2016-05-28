(function (angular) {
    var app = angular.module('services.boxClosingService', []);

    app.service('BoxClosingService', ['$q', '$http', 'ConstantsService', 'AuthService', function ($q, $http, ConstantsService, AuthService) {
        return {
            employess: employess,
            employee: getDetail
        };
    }
    ]);
})(angular);
