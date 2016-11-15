const chai = require('chai');
const kata = require('./devisible-by-10.kata.js');

chai.config.includeStack = true;

describe("closest-devisible-by-10", () => {
	it("returnes a new aray with rounded nums", () => {
		chai.expect( kata.deviseByTen([22, 33, 47]) ).to.eql([20, 30, 50]);
	});
});