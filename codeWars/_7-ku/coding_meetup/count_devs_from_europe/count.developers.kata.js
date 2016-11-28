/**
 * @description 
 *
 * You will be given an array of objects representing data about developers who have signed up 
 * to attend the coding meetup that you are organising for the first time.
 *
 * Your task is to return the number of JavaScript developers coming from Europe.
 * If, there are no JavaScript developers from Europe then your function should return 0
 * 
 * @param  {Array} list [description]
 * @return {Number}      [description]
 */
const countDevelopers = (list) => {
	return list.reduce((prev, cur) => cur.continent === 'Europe' && cur.language === 'JavaScript' ? prev += 1 : prev, 0);
};

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

var list2 = [
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
  { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];

var list3 = [
	{"firstName":"Nikola","lastName":"H.","country":"Serbia","continent":"Europe","age":29,"language":"Python"},
	{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},
	{"firstName":"Lukas","lastName":"R.","country":"Austria","continent":"Europe","age":89,"language":"C"},
	{"firstName":"Mehdi","lastName":"H.","country":"Tunisia","continent":"Africa","age":42,"language":"Python"},
	{"firstName":"Piotr","lastName":"C.","country":"Poland","continent":"Europe","age":55,"language":"PHP"},
	{"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},
	{"firstName":"Sara","lastName":"Y.","country":"Montenegro","continent":"Europe","age":39,"language":"C"},
	{"firstName":"Ximena","lastName":"Q.","country":"Mexico","continent":"Americas","age":28,"language":"Java"},
	{"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":42,"language":"JavaScript"},
	{"firstName":"Louise","lastName":"F.","country":"France","continent":"Europe","age":22,"language":"Java"}
	];

let res1 = countDevelopers(list3);
console.log(res1);

module.exports = {
	countDevelopers
};