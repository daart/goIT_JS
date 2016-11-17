/**
 * @description 
 *
 *
 * 
 * @param  {Number} num [description]
 * @return {String}     [description]
 */
const dashatize = (num) => {
	return num.toString().replace(/([13579])/g, '-$1-').replace(/--/g, '-').replace(/^-|-$/g, '');

	// let arr = num.toString().split('');
	// var resultArray = arr.reduce((result, cur, arr) => {

	// }, '');
	
};

let num1 = 17439865;

let res1 = dashatize(num1);
console.log(res1);

// console.log(dashatize(274), "2-7-4", "Should return 2-7-4");
// console.log(dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
// console.log(dashatize(86320), "86-3-20", "Should return 86-3-20");
// console.log(dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");