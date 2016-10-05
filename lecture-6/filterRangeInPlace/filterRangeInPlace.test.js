let chai = require('chai');
let assert = require('assert');
let moduleFilterRangeInPlace = require('./filterRangeInPlace.js');
chai.config.includeStack = true;

describe("filterRangeInPlace", () => {
	it("maps an array, leaving only the ones in the range from a to b", () => {
		var arr = [5, 1, 8, 3];

		chai.expect( moduleFilterRangeInPlace.filterRangeWithFilter(arr, 1, 4)  ).to.eql([1, 3]);
	});

	it("maps an array, leaving only the ones in the range from a to b", () => {
		var arr = [5, 1, 8, 3, 7, 1, 1, 4, -3];

		chai.expect( moduleFilterRangeInPlace.filterRangeWithSplice(arr, 1, 4)  ).to.eql([1, 3]);
	});

});
