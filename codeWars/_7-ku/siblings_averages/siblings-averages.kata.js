/**
 * @description
 *
 * Write a method, that gets an array of integer-numbers and return an array of the
 * averages of each integer-number and his follower, if there is one.
 *
 * If the array has 0 or 1 values or is null or None, your method should return an empty array.
 *
 * 
 * @param  {Array} arr [description]
 * @return {Array}     [description]
 */
const averages = (arr) => {
	return arr !== null ? arr.map((el, ind, arr) => arr[ind + 1] !== undefined ? (el + arr[ind + 1]) / 2 : false).filter(el => el !== false) : [];
};

let arr1 = [2, 2, 2, 2, 2];
let arr2 = [2, -2, 2, -2, 2];
let arr3 = [1, 3, 5, 1, -10];
let arr4 = null;

let res1 = averages(arr1);
console.log(res1);
let res2 = averages(arr2);
console.log(res2);
let res3 = averages(arr3);
console.log(res3);
let res4 = averages(arr4);
console.log(res4);
