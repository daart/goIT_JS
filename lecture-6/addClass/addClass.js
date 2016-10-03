/**
 * @description
 *
 * this function expects 2 arguments: an 'obj' as an object and a 'newClass' as a string
 * runs through object properties if such, splits a string by ' ' if obj[property] !== '' (an empty string),
 * if equals (obj[prop] === '') set to [];
 * 
 * than checks whether 'newClass' is found within obj[property], if yes, than return an object without changes,
 * if not pushes that string to an array, than turns an array into a  string, and sets that string as an obj[proprty],
 * returnes an object
 *  
 * @param {object} obj   [description]
 * @param {string} newClass [description]
 * @returns {obj} an object
 */
function addClass(obj, newClass) {

	for (var property in obj) {
		var arr = obj[property] ? obj[property].split(' ') : [];

		if( arr.indexOf(newClass) !== -1) {
			continue;
		} 

		arr.push(newClass);
		obj[property] = arr.join(' ');
	}

	return obj;
}

var obj1 = {
	className: 'open menu'
}

// var addClassResult1 = addClass(obj1, 'new');
// var addClassResult2 = addClass(obj1, 'mymenu');
// var addClassResult5 = addClass(obj1, 'menu');
// var addClassResult3 = addClass(obj1, 'open');
// var addClassResult4 = addClass(obj1, 'scoop');

// console.log(addClassResult1);
// console.log(addClassResult2);
// console.log(addClassResult3);
// console.log(addClassResult4);
// console.log(addClassResult5);

module.exports = {
	addClass: addClass
}