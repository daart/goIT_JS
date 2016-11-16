/**
 * @description 
 *
 * You will be given an array of objects representing data about developers 
 * who have signed up to attend the next coding meetup that you are organising.
 * Your task is to return an array which includes the developer who is the oldest. 
 * In case of a tie, include all same-age senior developers listed in the same order
 * as they appeared in the original input array.
 * 
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
const findSenior = (list) => {
	let maxAge = list.reduce((maxAge, {age}) => age > maxAge ? age : maxAge, list[0].age);
	return list.filter(el => el.age === maxAge);
};

var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' }
];

var list2 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' }
];

var list3 = [
  { firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
  { firstName: 'Fatima', lastName: 'K.', country: 'Saudi Arabia', continent: 'Asia', age: 21, language: 'Clojure' },
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Nikola', lastName: 'H.', country: 'Serbia', continent: 'Europe', age: 29, language: 'Python' },
  { firstName: 'Jakub', lastName: 'I.', country: 'Slovakia', continent: 'Europe', age: 28, language: 'Java' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 89, language: 'JavaScript' },
  { firstName: 'Luka', lastName: 'J.', country: 'Slovenia', continent: 'Europe', age: 29, language: 'Clojure' },
  { firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' }
];

var list4 = [
	{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},
	{"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Clojure"},
	{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"}
];

var list5 = [
	{"firstName":"Mehdi","lastName":"H.","country":"Tunisia","continent":"Africa","age":42,"language":"Python"},
	{"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"}
];

var list6 = [
	{"firstName":"Nor","lastName":"E.","country":"Malaysia","continent":"Asia","age":21,"language":"Clojure"},
	{"firstName":"Althea","lastName":"I.","country":"Philippines","continent":"Asia","age":31,"language":"Python"},
	{"firstName":"Sou","lastName":"B.","country":"Japan","continent":"Asia","age":43,"language":"PHP"},
	{"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":35,"language":"Python"},
	{"firstName":"Sofia","lastName":"W.","country":"Moldova","continent":"Europe","age":29,"language":"Ruby"},
	{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},
	{"firstName":"Louise","lastName":"F.","country":"France","continent":"Europe","age":22,"language":"Java"},
	{"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":41,"language":"Clojure"},
	{"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":89,"language":"JavaScript"},
	{"firstName":"Emma","lastName":"Z.","country":"Netherlands","continent":"Europe","age":29,"language":"Ruby"},
	{"firstName":"Andrei","lastName":"E.","country":"Romania","continent":"Europe","age":19,"language":"C"},
	{"firstName":"Fatima","lastName":"K.","country":"Saudi Arabia","continent":"Asia","age":21,"language":"Clojure"},
	{"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":30,"language":"C"},
	{"firstName":"Daniel","lastName":"J.","country":"Aruba","continent":"Americas","age":42,"language":"JavaScript"},
	{"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},
	{"firstName":"Marian","lastName":"N.","country":"Colombia","continent":"Americas","age":55,"language":"Python"},
	{"firstName":"Emily","lastName":"A.","country":"Northern Ireland","continent":"Europe","age":32,"language":"JavaScript"},
	{"firstName":"Sumayah","lastName":"M.","country":"Tajikistan","continent":"Asia","age":30,"language":"Ruby"},
	{"firstName":"Mariam","lastName":"B.","country":"Egypt","continent":"Africa","age":89,"language":"Python"},
	{"firstName":"Laia","lastName":"P.","country":"Andorra","continent":"Europe","age":55,"language":"Ruby"},
	{"firstName":"Manuel","lastName":"C.","country":"Equatorial Guinea","continent":"Africa","age":22,"language":"Ruby"},
	{"firstName":"Oliver","lastName":"Q.","country":"Australia","continent":"Oceania","age":19,"language":"PHP"},
	{"firstName":"Jakub","lastName":"I.","country":"Slovakia","continent":"Europe","age":28,"language":"Java"},
	{"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},
	{"firstName":"William","lastName":"L.","country":"Sweden","continent":"Europe","age":32,"language":"Java"},
	{"firstName":"Gabriel","lastName":"T.","country":"Luxembourg","continent":"Europe","age":28,"language":"Java"},
	{"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},
	{"firstName":"Shufen","lastName":"L.","country":"Taiwan","continent":"Asia","age":35,"language":"PHP"},
	{"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"},
	{"firstName":"Madison","lastName":"U.","country":"United States","continent":"Americas","age":32,"language":"Ruby"},
	{"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},
	{"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},
	{"firstName":"Emma","lastName":"U.","country":"Belgium","continent":"Europe","age":39,"language":"Python"},
	{"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":42,"language":"JavaScript"},
	{"firstName":"Mehdi","lastName":"H.","country":"Tunisia","continent":"Africa","age":42,"language":"Python"},
	{"firstName":"Maria","lastName":"Y.","country":"Cyprus","continent":"Europe","age":30,"language":"Java"},
	{"firstName":"Thomas","lastName":"L.","country":"Canada","continent":"Americas","age":38,"language":"Java"},
	{"firstName":"Amar","lastName":"V.","country":"Bosnia and Herzegovina","continent":"Europe","age":32,"language":"Ruby"},
	{"firstName":"Nikola","lastName":"H.","country":"Serbia","continent":"Europe","age":29,"language":"Python"},
	{"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":28,"language":"JavaScript"},
	{"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},
	{"firstName":"Stevenson","lastName":"O.","country":"Haiti","continent":"Americas","age":22,"language":"Ruby"},
	{"firstName":"Sara","lastName":"Y.","country":"Montenegro","continent":"Europe","age":89,"language":"C"},
	{"firstName":"Sofia","lastName":"C.","country":"Estonia","continent":"Europe","age":29,"language":"PHP"},
	{"firstName":"Nikau","lastName":"R.","country":"New Zealand","continent":"Oceania","age":39,"language":"Ruby"},
	{"firstName":"Hugo","lastName":"K.","country":"Spain","continent":"Europe","age":39,"language":"Python"},
	{"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"C"},
	{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":89,"language":"Clojure"},
	{"firstName":"Fatima","lastName":"A.","country":"Algeria","continent":"Africa","age":25,"language":"JavaScript"},
	{"firstName":"Mohammad","lastName":"N.","country":"United Arab Emirates","continent":"Asia","age":39,"language":"C"}
];

// var res1 = findSenior(list1);
// var res2 = findSenior(list2);
// var res3 = findSenior(list3);
// var res4 = findSenior(list4);
// var res5 = findSenior(list5);
var res6 = findSenior(list6);

// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
console.log(res6);



var answer1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' }
];

var answer2 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' }
];

var answer3 = [
  { firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 89, language: 'JavaScript' },
  { firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' }
];

var answer5 = [
	{ firstName: 'Mehdi',
	  lastName: 'H.',
	  country: 'Tunisia',
	  continent: 'Africa',
	  age: 42,
	  language: 'Python' 
	}
];

module.exports = {
	findSenior
};

