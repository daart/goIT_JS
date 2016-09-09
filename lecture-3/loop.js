function echo(anyshit) {
	console.log(anyshit);
}

var i = 0;
var k = '';

while(i < 10) {
	i += 2;
	console.log(i);
}

while(k.length < 7) {
	k += '#';
	echo(k);
}