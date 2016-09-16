function echo(data) {
	return console.log(data);
}

function firstCharToUppercase(word) {
	var res = '';
	return res = word[0].toUpperCase() + word.slice(1);
}

var modifiedWord = firstCharToUppercase('hello');
echo(modifiedWord);