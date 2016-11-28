const chai = require('chai');
const kata = require('./findAdmin.kata');
chai.config.includeStack = true;

describe("countDevelopers", () => {
	
	it("returns a filtered array of developers that are github admins and with corresponding language", () => {
		chai.expect(kata.findAdmin([
			{ firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
			{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
			{ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
			{ firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
		], 'JavaScript'))
		.to.eql([
			{ firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
			{ firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
		])
	});

	it("returns a filtered array of developers that are github admins and with corresponding language", () => {

		chai.expect(kata.findAdmin([
			{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":22,"language":"JavaScript","githubAdmin":"yes"},
			{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":49,"language":"Ruby","githubAdmin":"no"},
			{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":34,"language":"JavaScript","githubAdmin":"yes"},
			{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"Javascript","githubAdmin":"no"},
			{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":20,"language":"Ruby","githubAdmin":"no"},
			{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":21,"language":"C","githubAdmin":"yes"},
			{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":60,"language":"C","githubAdmin":"yes"},
			{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":75,"language":"JavaScript","githubAdmin":"no"},
			{"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby","githubAdmin":"yes"},
			{"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":98,"language":"PHP","githubAdmin":"no"},
			{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"JavaScript","githubAdmin":"no"}
		], 'JavaScript'))
		.to.eql([
			{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":22,"language":"JavaScript","githubAdmin":"yes"},
			{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":34,"language":"JavaScript","githubAdmin":"yes"},
		])
	});

	it("returns a filtered array of developers that are github admins and with corresponding language", () => {

		chai.expect(kata.findAdmin([  
			{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":22,"language":"JavaScript","githubAdmin":"yes"},
			{"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":49,"language":"Ruby","githubAdmin":"no"},
			{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":34,"language":"JavaScript","githubAdmin":"yes"},
			{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"Javascript","githubAdmin":"no"},
			{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":20,"language":"Ruby","githubAdmin":"no"},
			{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":21,"language":"C","githubAdmin":"yes"},
			{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":60,"language":"C","githubAdmin":"yes"},
			{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":75,"language":"JavaScript","githubAdmin":"no"},
			{"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby","githubAdmin":"yes"},
			{"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":98,"language":"PHP","githubAdmin":"no"},
			{"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"JavaScript","githubAdmin":"no"}
		], 'Ruby'))
		.to.eql([
			{"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby","githubAdmin":"yes"},
		]);
	});

});