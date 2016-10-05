let chai = require('chai');
let kata = require('./kata');
chai.config.includeStack = true;

describe("findSum", () => {

	if("should return 0, if an argument n < 3", () => {
		chai.expect( kata.findSum(2) ).to.eql(+'0');
	});

	it("should return 3 if a number is >= 3", () => {
		chai.expect( kata.findSum(3) ).to.eql(3);
	});

	it("should return a sum of numbers that are devided by 3 and 5, and if a number is > 3", () => {
		chai.expect( kata.findSum(5) ).to.eql(8);
	});

	it("should return a sum of numbers that are devided by 3 and 5, and if a number is > 3", () => {
		chai.expect( kata.findSum(10) ).to.eql(33);
	});

});
