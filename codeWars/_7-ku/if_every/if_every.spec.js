const chai = require('chai');
const kata = require('./if_every.kata');
chai.config.includeStack = true;

describe("if-every-lang", () => {
	it("if every language property equals to the the language prop of the first array element return true, otherwise return false", () => {
		chai.expect(kata.ifEvery([
			{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
			{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
			{ firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' }
		])).to.eql(true);
	});

	it("if every language property equals to the the language prop of the first array element return true, otherwise return false", () => {
		chai.expect(kata.ifEvery([
			{ firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
			{ firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
			{ firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' }
		])).to.eql(false);
	});
});
