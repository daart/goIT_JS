/**
 * @descsription 
 *
 * My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members 
 * is published and each month he is the last on the list which means he is the heaviest.
 *
 * I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". 
 * It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
 *
 * For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. 
 * Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
 *
 * When two numbers have the same "weight", let us class them as if they were strings and not numbers: 
 * 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.
 * 
 * @param  {String} strng [description]
 * @return {String}       [description]
 */
const orderWeight = (strng) => {
	const m = {};
	strng.split(' ').forEach(el => m[el] = el.split('').reduce((p, n) => +p + +n));
	return strng.split(' ').sort((a, b) => m[a] > m[b] ? 1 : m[a] < m[b] ? -1 : m[a] === m[b] && a > b ? 1 : -1).join(' ');
};

const orderWeight3 = (strng) => {
	return strng.split(' ').sort((a, b) => a.split('').reduce((p, n) => +p + +n) - b.split('').reduce((p, n) => +p + +n) || a > b || -1 ).join(' ');
};

const orderWeight2 = (strng) => {
		return strng.split(' ').sort((a, b) => {
		return a.split('').reduce((p, n) => +p + +n, 0) > b.split('').reduce((p, n) => +p + +n, 0) ? 1 :
			a.split('').reduce((p, n) => +p + +n, 0) < b.split('').reduce((p, n) => +p + +n, 0) ? - 1 :
				a.split('').reduce((p, n) => +p + +n, 0) === b.split('').reduce((p, n) => +p + +n, 0) && a > b ? 1 : -1

	}).join(' ');
};

str1 = '56 65 74 100 99 68 86 180 90';
str2 = '1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703';
str3 = '11 11 2000 10003 22 123 1234000 44444444 9999';


res2 = orderWeight3(str2); //	'1131268 3 16 9 38 95 49455 347464 59544965313 496636983114762 85246814996697'
res1 = orderWeight3(str1); //     100 180 90 56 65 74 68 86 99
res3 = orderWeight3(str3); // '11 11 2000 10003 22 123 1234000 44444444 9999'


console.log(res3);
