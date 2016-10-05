var vasya = { name: "Vasya", age: 23 };
var masha = { name: "Masha", age: 18 };
var vova = { name: "Vova", age: 6 };

var people = [vasya, masha, vova];

function sortObjects(arr) {
	var result = [];
	var sortedArr = arr.sort(function(personA, personB) {
		return personA.age - personB.age;
	});

	for (var i = 0, len = sortedArr.length; i < len; i++) {
		result.push(sortedArr[i].name);
	}
	
	return result.join(' ');
}

var res1 = sortObjects(people);
console.log(res1);