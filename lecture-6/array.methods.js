// task 1 
var obj1 = {
	className: ""
}

/**
 * [addClass description : takes two parameters an pbject and a string,
 * and adds that string to 'className' property if unique, if not - leaves
 * the property without changes ]
 * @param {[type: obj]} obj      [description]
 * @param {[type: string]} newClass [description]
 */
function addClass(obj, newClass) {

	// return Object.keys(obj);

	for(var prop in obj) {
		var arr = obj[prop] ? obj[prop].split(' ') : [];

		if(arr.indexOf(newClass) !== -1) {
			return obj;
		} else {
			arr.push(newClass);
			obj[prop] = arr.join(' ');
			return obj;
		}
	}

}

var addClassResult1 = addClass(obj1, 'new');
var addClassResult2 = addClass(obj1, 'mymenu');
var addClassResult5 = addClass(obj1, 'menu');
// var addClassResult3 = addClass(obj1, 'open');
// var addClassResult4 = addClass(obj1, 'scoop');

// console.log(addClassResult1);
console.log(addClassResult2);
// console.log(addClassResult3);
// console.log(addClassResult4);
// console.log(addClassResult5);


// task 2: write a function toCamalCase(str) that turnes a string with hyphens to CamelCase string (list-style ==> listStyle);

function toCamelCase(str) {
	var result = str.split('-');
	for(var i = 0; i < result.length; i++) {
		if(result[i] === '') {
			continue;
		}

		result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
	}

	result = result.join('');
	return result;
}

var toCamelCase1 = toCamelCase('-webkit-transition');
var toCamelCase2 = toCamelCase('box-sizing');
// console.log(toCamelCase1);


// task 3 returns sum of all arguments
function calculateSumOfArgs1() {
	var result = 0;

	for(var arg = 0; arg < arguments.length; arg++ ) {
		result += arguments[arg];
	}

	return result;

}

function calculateSumOfArgs2() {
	return [].reduce(function(accum, cur) {
		accum += cur;
		return accum;
	}, 0).apply(this, arguments);
}

var sum1 = calculateSumOfArgs1(1, 2, 3, 5, 6, 8, -12, 16);
var sum2 = calculateSumOfArgs1(1, 2, 3, 5, 6, 8, -12, 16);
// console.log(sum1);
// console.log(sum2);


var someArr1 = 'Mysha, Masha, Kasha, Sasha, Lyubasha';
var splittedArr1 = someArr1.split(',');
// console.log( splittedArr1 );