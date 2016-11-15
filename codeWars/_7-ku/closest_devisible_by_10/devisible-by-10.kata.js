/**
 * @description 
 *
 *
 * 
 * @param  {Array} arr [description]
 * @return {Array}     [description]
 */
const deviseByTen = (arr) => {
	return arr = arr.map( (c) => Math.round(c / 10) * 10);
};

const arr1 = [22, 33, 47];
const arr2 = [123, 141, 136];

const res1 = deviseByTen(arr1);
const res2 = deviseByTen(arr2);

console.log(res1);
console.log(res2);

module.exports = {
	deviseByTen
};
