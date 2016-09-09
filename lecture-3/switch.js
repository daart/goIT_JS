function echo(data) {
	console.log(data);
}


var a = +prompt('Please enter A number ? : ', '');

switch (a) {
	case 0 :
		alert(0);
		break;
	case 1:
		alert(1);
		break;
	case 2:
	case 3:
		alert('2, 3');
		break;
}


var browser = prompt('Please enter your fav browser: ', '');

if(browser === 'IE') {
	echo('are you fucken nuts ?')
} else if( browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
	echo('good call!');
} else {
	echo('Who the fuck are you ?');
}


