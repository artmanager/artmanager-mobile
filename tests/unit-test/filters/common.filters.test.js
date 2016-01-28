/* global describe, beforeEach, it, inject, expect, installPromiseMatchers, jasmine  */
(function (describe, beforeEach, it, inject, expect, installPromiseMatchers) {
    describe('Comman Filters', function () {
        var $filterColors = "";
        
        beforeEach(module('filters.commonFilters'));
        // beforeEach(inject(function (_filterStatusColor_) {
        //     $filterColors = _filterStatusColor_;   
        // }));

        it('verify instance of _filterStatusColor_  ', function () {
            expect($filterColors).toBeDefined();
        });
        //   
        // it('create new client', function () {
        //     // expect(_userService.create()).toBeResolvedWith(false);
        // });
        
        
    });
})(describe, beforeEach, it, inject, expect, installPromiseMatchers);