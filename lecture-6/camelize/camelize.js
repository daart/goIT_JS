/**
 * @description 
 *
 * camelize function expects 1 argument - a string with a hyphens (like background-color).
 * String should be transformed into array with split('-') method, than
 * hyphens should be dropped and string should turn to camelCase (like backgroundColor).
 * 
 * @param  {string} str [description]
 * @return {string}     [description]
 */
function camelize(str) {
	var result = str.split('-');

	for (var i = 1, len = result.length; i < len; i++){
		result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
	}

	return result.join('');
}

// var str1 = 'background-color';
// var str2 = '-webkit-border-radius';

// var res1 = camelize(str1);
// var res2 = camelize(str2);

// console.log(res1);
// console.log(res2);

module.exports = {
	camelize
}