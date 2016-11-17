const chai = require('chai');
const kata = require('./get_the_average_age.kata');
chai.config.includeStack = true;

describe("get-the-average-age", () => {
	it("expects average to equal 50 ", () => {
		chai.expect( kata.getTheAverageAge([
			{ firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
			{ firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' }
		])).to.eql(50);});

	it("expects average to equal 21 ", () => {
		chai.expect( kata.getTheAverageAge([
		  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
		  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' }
		])).to.eql(21);
	});

	it("expects average to equal 66 ", () => {
		chai.expect( kata.getTheAverageAge([
			{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},
			{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},
			{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},
			{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},
			{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":59,"language":"C"},
			{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":60,"language":"C"},
			{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":75,"language":"Python"},
			{"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby"},
			{"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":98,"language":"PHP"},
			{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"Javascript"}
		])).to.eql(66);
	});
})