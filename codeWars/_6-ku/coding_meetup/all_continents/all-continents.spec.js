const chai = require('chai');
const kata = require('./all-continents.kata');
chai.config.includeStack = true;

describe("all-continents", () => {
	it("expects to eql true if every dictionary value eqls to true", () => {
		chai.expect(kata.allContinents([
		  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
		  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
		  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
		  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
		  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
		])).to.eql(true);
	});
	it("expects to eql true if every dictionary value eqls to true", () => {
		chai.expect(kata.allContinents([
 			{ firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
		])).to.eql(false);
	});
	it("expects to eql true if every dictionary value eqls to true", () => {
		chai.expect(kata.allContinents([
			{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},
			{"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Clojure"},
			{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"}
		])).to.eql(false);
	});
	it("expects to eql true if every dictionary value eqls to true", () => {
		chai.expect(kata.allContinents([
			{"firstName":"Maria","lastName":"Y.","country":"Cyprus","continent":"Europe","age":30,"language":"Java"},
			{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},
			{"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Python"},
			{"firstName":"Oliver","lastName":"Q.","country":"Australia","continent":"Oceania","age":19,"language":"PHP"},
			{"firstName":"Marian","lastName":"N.","country":"Colombia","continent":"Americas","age":55,"language":"Python"},
			{"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},
			{"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"},
			{"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"},
			{"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},
			{"firstName":"Stevenson","lastName":"O.","country":"Haiti","continent":"Americas","age":22,"language":"Ruby"},
			{"firstName":"Gabriel","lastName":"T.","country":"Luxembourg","continent":"Europe","age":28,"language":"Java"},
			{"firstName":"Artem","lastName":"O.","country":"Ukraine","continent":"Europe","age":29,"language":"Java"},
			{"firstName":"Aya","lastName":"D.","country":"Libya","continent":"Africa","age":39,"language":"C"},
			{"firstName":"Lukas","lastName":"R.","country":"Austria","continent":"Europe","age":89,"language":"C"},
			{"firstName":"Nor","lastName":"E.","country":"Malaysia","continent":"Asia","age":21,"language":"Clojure"},
			{"firstName":"Louise","lastName":"F.","country":"France","continent":"Europe","age":22,"language":"Java"},
			{"firstName":"Precious","lastName":"G.","country":"South Africa","continent":"Africa","age":22,"language":"JavaScript"},
			{"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":28,"language":"PHP"},
			{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},
			{"firstName":"Mohammad","lastName":"N.","country":"United Arab Emirates","continent":"Asia","age":39,"language":"C"},
			{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},
			{"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":30,"language":"Clojure"},
			{"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":28,"language":"Python"},
			{"firstName":"Odval","lastName":"F.","country":"Mongolia","continent":"Asia","age":38,"language":"Python"},
			{"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},
			{"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},
			{"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},
			{"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":35,"language":"JavaScript"},
			{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":35,"language":"Python"},
			{"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"C"}
		])).to.eql(true);
	});
	it("expects to eql true if every dictionary value eqls to true", () => {
		chai.expect(kata.allContinents([
			{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":19,"language":"C"},
			{"firstName":"Jakub","lastName":"Z.","country":"Czech Republic","continent":"Europe","age":42,"language":"Java"},
			{"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},
			{"firstName":"Ramon","lastName":"R.","country":"Paraguay","continent":"Americas","age":29,"language":"Ruby"},
			{"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},
			{"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Python"},
			{"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},
			{"firstName":"Mehdi","lastName":"H.","country":"Tunisia","continent":"Africa","age":42,"language":"Python"},
			{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},
			{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},
			{"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":28,"language":"JavaScript"},
			{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":89,"language":"Clojure"},
			{"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":35,"language":"JavaScript"},
			{"firstName":"Ximena","lastName":"Q.","country":"Mexico","continent":"Americas","age":28,"language":"Java"},
			{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":30,"language":"C"},
			{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"},
			{"firstName":"Sofia","lastName":"C.","country":"Estonia","continent":"Europe","age":29,"language":"PHP"},
			{"firstName":"Marian","lastName":"N.","country":"Colombia","continent":"Americas","age":55,"language":"Python"},
			{"firstName":"Yerasyl","lastName":"D.","country":"Kazakhstan","continent":"Asia","age":22,"language":"Ruby"},
			{"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"},
			{"firstName":"Althea","lastName":"I.","country":"Philippines","continent":"Asia","age":31,"language":"Python"},
			{"firstName":"Precious","lastName":"G.","country":"South Africa","continent":"Africa","age":22,"language":"JavaScript"},
			{"firstName":"Odval","lastName":"F.","country":"Mongolia","continent":"Asia","age":38,"language":"Python"},
			{"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"},
			{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":35,"language":"Python"},
			{"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},
			{"firstName":"Zahra","lastName":"S.","country":"Azerbaijan","continent":"Europe","age":22,"language":"Java"},
			{"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},
			{"firstName":"Agustín","lastName":"M.","country":"Chile","continent":"Americas","age":37,"language":"C"},
			{"firstName":"Gabriel","lastName":"X.","country":"Monaco","continent":"Europe","age":29,"language":"PHP"}
		])).to.eql(false);
	});
});
