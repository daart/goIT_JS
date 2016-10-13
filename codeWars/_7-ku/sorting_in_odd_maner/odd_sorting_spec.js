const chai = require('chai');

const kata = require('./odd_sorting');
chai.config.includeStack = true;

describe("sortItOut", () => {
	it("if array contains decimals, should round them down while checking for odd/even ", () => {
		chai.expect( kata.sortItOut([11,22,33,44,55,55,90.4,4,78]) ).to.eql([11,33,55,55,90.4,78,44,22,4])
	});
	it("odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number", () => {
		chai.expect( kata.sortItOut([26,243,52,2,432414,1,11,46,32]) ).to.eql([1,11,243,432414,52,46,32,26,2])
	});
	it("odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number", () => {
		chai.expect( kata.sortItOut([]) ).to.eql([])
	});
	it("odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number", () => {
		chai.expect( kata.sortItOut([19,65,88,112,60,14,33,49,88]) ).to.eql([19,33,49,65,112,88,88,60,14])
	});
	it("odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number", () => {
		chai.expect( kata.sortItOut([68,25,99,50,10,67,2,5,8,34,67]) ).to.eql([5,25,67,67,99,68,50,34,10,8,2])
	});
});
