/**
 * @description
 *
 *function that returnes factorial to a given number.
 *If n! = 0 => return 1
 *If n! = 1 => return n
 *otherwise calculate factorial recursively;
 * 
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */
function factorial1(n) {
	return n === 0 ? 1 : 
		n === 1 ? n : n * factorial1(n - 1);
}

function factorial2(n) {
	return n < 2 ? 1 :
		n * factorial2(n - 1);
}


function factorial3(n) {
	for(var acc = 1; n > 0; acc *= n, n--);
	return acc;
}


// var fac1 = factorial1(17);
// var fac2 = factorial2(0);
var fac3 = factorial2(1);

// console.log(fac1);
// console.log(fac2);
console.log(fac3);

module.exports = {
	factorial1,
	factorial2,
	factorial3,
};