/* global describe, beforeEach, it, inject, expect, installPromiseMatchers, jasmine  */
(function (describe, beforeEach, it, inject, expect, installPromiseMatchers) {
    describe('User Service', function () {
        var _userService;
        
        beforeEach(module('services.utilService'));
        beforeEach(module('services.userService'));
        beforeEach(inject(function (_UserService_) {
            installPromiseMatchers();
            _userService = _UserService_;
        }));

        it('verify instance of ClientService', function () {
            expect(_userService).toBeDefined();
        });
        
        // it('create new client', function () {
        //     // expect(_userService.create()).toBeResolvedWith(false);
        // });
        
        
    });
})(describe, beforeEach, it, inject, expect, installPromiseMatchers);