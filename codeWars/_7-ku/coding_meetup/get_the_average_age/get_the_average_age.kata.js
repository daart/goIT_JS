/**
 * @description
 *
 * You will be given an array of objects representing data about developers 
 * who have signed up to attend the next coding meetup that you are organising. 
 *
 * write a function that returns the average age of developers (rounded to the nearest integer).
 * @param  {Array} list [description]
 * @return {Number}      [description]
 */
const getTheAverageAge = (list) => {
	return Math.round(list.reduce((acc, cur) => acc +=cur.age, 0) / list.length);
};

var list1 = [
  { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' }
];

var list2 = [
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C' }
];


var res1 = getTheAverageAge(list1);
console.log(res1);
var res2 = getTheAverageAge(list2);
console.log(res2);

module.exports = {
	getTheAverageAge
};