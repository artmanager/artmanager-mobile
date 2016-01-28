/* global describe, beforeEach, it, inject, expect, installPromiseMatchers, jasmine  */
(function (describe, beforeEach, it, inject, expect) {
    describe('tests of filter status color', function () {
        var $filterColors;
        
        beforeEach(function () {
            module('filters.commonFilters');
        });
        beforeEach(inject(function ($filter) {
            $filterColors = $filter('filterStatusColor');
            expect($filter('filterStatusColor')).not.toBeNull();
        }));

        it('check with status 0 is red  ', function () {
            expect($filterColors(0)).toBe('red');
        });
        it('check error  status with invalidColor  ', function () {
          expect(function (){ $filterColors(999999) }).toThrowError(RangeError);
        });
        
        it('check error with status is string', function () {
          expect(function (){ $filterColors("0") }).toThrowError(TypeError);
        });

    });
})(describe, beforeEach, it, inject, expect);