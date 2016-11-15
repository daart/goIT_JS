/**
 * @description 
 *
 *You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup
 *that you are organising.Your task is to return either: 
 *true if all developers in the list code in the same language; 
 *or false otherwise.
 * 
 * @param  {Array} arr [description]
 * @return {Boolean}     [description]
 */
const ifEvery = (arr) => {
	return arr.every(el => el.language === arr[0].language);
};

const arr1 = [
	{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
	{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
	{ firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' }
];

const arr2 = [
	{ firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
	{ firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
	{ firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' }
];

var res1 = ifEvery(arr1);
var res2 = ifEvery(arr2);
// console.log(res1);
// console.log(res2);

module.exports = {
	ifEvery
};