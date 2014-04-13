describe('filter', function() {
	beforeEach(module('myApp'));

	describe('reverse', function() {
		it('should reverse a field', inject(function(reverseFilter) {
			expect(reverseFilter('ABCD')).toEqual('DCBA');
			expect(reverseFilter('John')).toEqual('nhoJ')
		}));
	});
});