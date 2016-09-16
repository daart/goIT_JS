function echo(anyData) {
	return console.log(anyData);
}

/*
	Fibonacci sequence : write a function, that returnes Fibbonacci sequence value
 */
function fibo(n) {
	var res = 0;
	res = (n === 0) ? 0 : 
		(n >= 2) ? fibo(n - 1) + fibo(n - 2) : 1; 
	return res;
}

var res1 = fibo(17);
// echo(res1);


/*
	Check on Spam: write a function that checks, if there are forbidden words 'sex' & 'spam';
 */
function checkSpam(string) {
	var lowerCaseStr = string.toLowerCase();
	return (lowerCaseStr.indexOf('sex') !== -1 || lowerCaseStr.indexOf('spam') !== -1) ? true : false;
}

var spamCheckResult = checkSpam('New PSD sex template');
// echo(spamCheckResult);


/*
	Three dots: write a fucntion that adds '...' to the end of the string,
	if the length of a string is > 20 characters. If not, just return a given string;
 */

function addThreeDots(str) {
	return str = str.length > 20 ? str.slice(0, 20) + '...' : str;
}

var word1 = addThreeDots('asdfasdfasdfasdfasdfaaaaa');
// echo(word1);