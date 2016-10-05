let chai = require('chai');
let kata = require('./factorial');
chai.config.includeStack = true;

describe("factorial", () => {
	it("returns 1 if N === 0", () => {
		chai.expect( kata.factorial1(0) ).to.eql(1);
	});

	it("returns 1 if N === 1", () => {
		chai.expect( kata.factorial1(1) ).to.eql(1);
	});

	it("returns 24 if N === 4", () => {
		chai.expect( kata.factorial1(4) ).to.eql(24);
	});

	it("returns 5040 if N === 7", () => {
		chai.expect( kata.factorial1(7) ).to.eql(5040);
	});

	it("returns 355687428096000 if N === 17", () => {
		chai.expect( kata.factorial1(17) ).to.eql(355687428096000);
	});
});