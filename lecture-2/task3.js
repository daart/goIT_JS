var userAuth = prompt('Please enter your user rights : ');

if(userAuth === 'admin') {
	var pass = prompt('Enter the Password : ');
	alert('Welcome back! your pass is : ' + pass);
} else if(userAuth === null) {
	alert('Canceled');
} else {
	alert('Access Denied!');
}