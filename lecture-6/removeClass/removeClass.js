/**
 * @description 
 *
 * expects two arguments : 'obj' as an object and 'cls' as a string, 
 * removes 'cls' string if any matches found within obj[property],
 * and returnes an updated object, if no matches, return an object without changes;
 *
 * 
 * @param  {object} obj [description]
 * @param  {string} cls [description]
 * @return {object}     [description]
 */
function removeClass(obj, cls) {

	for (var property in obj) {
		var arr = obj[property] ? obj[property].split(' ') : [];
	}

	for(var i = 0, len = arr.length; i < len; i++) {
		if(arr[i] === cls) {
			arr.splice(i--, 1);
			obj[property] = arr.join(' ');
		}
	}

	return obj;
}

var obj1 = {
	className: 'my menu menu menu open close menu menu revenue'
};

// var removeClassResult1 = removeClass(obj1, 'open');
// var removeClassResult2 = removeClass(obj1, 'mymenu');
// var removeClassResult5 = removeClass(obj1, 'blablabla');
// var removeClassResult3 = removeClass(obj1, 'open');
var removeClassResult4 = removeClass(obj1, 'menu');

// console.log(removeClassResult1);
// console.log(removeClassResult2);
// console.log(removeClassResult3);
// console.log(removeClassResult4);
// console.log(removeClassResult5);

module.exports = {
	removeClass
};