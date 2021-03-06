/**
 * @description 
 *
 * You will be given an array of objects representing data about developers 
 * who have signed up to attend the next coding meetup that you are organising.
 *
 * write a function that when executed as findAdmin(list1, 'JavaScript') 
 * returns only the JavaScript developers who are GitHub admins:
 *
 * The original order should be preserved. If there are no GitHub admin developers 
 * in a given language then return an empty array []. 
 * The input array will always be valid and formatted as in the example above. 
 * The strings representing whether someone is a GitHub admin 
 * will always be formatted as 'yes' and 'no' (all lower-case). 
 * The strings representing a given language will always be formatted in the same way
 * (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'. 
 * 
 * @param  {[type]} list [description]
 * @param  {[type]} lang [description]
 * @return {[type]}      [description]
 */
const findAdmin = (list, lang) => {
	return list.filter(el => el.githubAdmin === 'yes' && el.language === lang);
};

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

var list2 = [
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
];

var list3 = [
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
];

var res1 = findAdmin(list1);
console.log(list1);

module.exports = {
	findAdmin
};