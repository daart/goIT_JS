/**
 * @description 
 *
 * You will be given an array of objects representing data about developers
 * who have signed up to attend the next coding meetup that you are organising.
 * Your task is to return:
 * 
 * [true] if developers from all of the following age groups have signed up: 
 * teens, twenties, thirties, forties, fifties, sixties, seventies, eighties,
 * nineties, centenarian (at least 100 years young).
 * 
 * [false] otherwise.
 * 
 * @param  {[type]} list [description]
 * @return {[type]}      [description]
 */
const isAgeDiverse = (list) => {
  if(list.length < 10) {
    return false;
  }

  var res = list.sort((a, b) => a.age - b.age);

  for(var i = 0, len = res.length, div = 10; i < len; i++) {
    if(res[i].age < 20) {
      res[i].age = 10;
    }

    if(res[i].age > 100) {
      res[i].age = 100;
    }

    if( (res[i].age % div) < 10) {
      div += 10;
      if(div === 110) return true;
    }
  }

  return false;

};

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' }
];

var list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' }
];

var list3 = [
  { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
  { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
];

var list4 = [
  {"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"C"},
  {"firstName":"Mariami","lastName":"G.","country":"Georgia","continent":"Europe","age":29,"language":"Python"},
  {"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},
  {"firstName":"Hanna","lastName":"L.","country":"Hungary","continent":"Europe","age":29,"language":"JavaScript"},
  {"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":19,"language":"JavaScript"},
  {"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Europe","age":39,"language":"Clojure"},
  {"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},
  {"firstName":"Stevenson","lastName":"O.","country":"Haiti","continent":"Americas","age":22,"language":"Ruby"},
  {"firstName":"Emilija","lastName":"S.","country":"Lithuania","continent":"Europe","age":19,"language":"Python"},
  {"firstName":"Sofia","lastName":"P.","country":"Italy","continent":"Europe","age":71,"language":"Clojure"},
  {"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":70,"language":"Python"},
  {"firstName":"Fatemeh","lastName":"Z.","country":"Iran","continent":"Asia","age":29,"language":"Java"},
  {"firstName":"Nor","lastName":"E.","country":"Malaysia","continent":"Asia","age":21,"language":"Clojure"},
  {"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":52,"language":"JavaScript"},
  {"firstName":"Mohamed","lastName":"F.","country":"Morocco","continent":"Africa","age":90,"language":"Ruby"},
  {"firstName":"Sofia","lastName":"I.","country":"Argentina","continent":"Americas","age":35,"language":"Java"},
  {"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":8,"language":"JavaScript"},
  {"firstName":"Marija","lastName":"U.","country":"Republic of Macedonia","continent":"Europe","age":42,"language":"JavaScript"},
  {"firstName":"Mohammad","lastName":"N.","country":"United Arab Emirates","continent":"Asia","age":39,"language":"C"},
  {"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},
  {"firstName":"Lukas","lastName":"X.","country":"Croatia","continent":"Europe","age":75,"language":"Python"},
  {"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"},
  {"firstName":"Ellen","lastName":"E.","country":"Finland","continent":"Europe","age":55,"language":"Ruby"},
  {"firstName":"Manuel","lastName":"C.","country":"Equatorial Guinea","continent":"Africa","age":22,"language":"Ruby"},
  {"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":8,"language":"Python"},
  {"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},
  {"firstName":"Nikola","lastName":"H.","country":"Serbia","continent":"Europe","age":29,"language":"Python"},
  {"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"},
  {"firstName":"Luke","lastName":"V.","country":"Malta","continent":"Europe","age":129,"language":"PHP"},
  {"firstName":"Mamadou","lastName":"E.","country":"Mali","continent":"Africa","age":22,"language":"Python"},
  {"firstName":"Mehdi","lastName":"H.","country":"Tunisia","continent":"Africa","age":42,"language":"Python"},
  {"firstName":"Jayden","lastName":"P.","country":"Jamaica","continent":"Americas","age":42,"language":"JavaScript"},
  {"firstName":"Ximena","lastName":"Q.","country":"Mexico","continent":"Americas","age":28,"language":"Java"},
  {"firstName":"Fatima","lastName":"K.","country":"Saudi Arabia","continent":"Asia","age":105,"language":"Clojure"},
  {"firstName":"Sofia","lastName":"W.","country":"Moldova","continent":"Europe","age":29,"language":"Ruby"},
  {"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"},
  {"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"},
  {"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},
  {"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"},
  {"firstName":"Sou","lastName":"B.","country":"Japan","continent":"Asia","age":43,"language":"PHP"}
];

var list6 = [
  {"firstName":"Mohammad","lastName":"N.","country":"United Arab Emirates","continent":"Asia","age":39,"language":"C"},
  {"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"C"},
  {"firstName":"Sara","lastName":"Y.","country":"Montenegro","continent":"Europe","age":39,"language":"C"},
  {"firstName":"Ellen","lastName":"E.","country":"Finland","continent":"Europe","age":55,"language":"Ruby"},
  {"firstName":"Ximena","lastName":"Q.","country":"Mexico","continent":"Americas","age":28,"language":"Java"},
  {"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":88,"language":"Ruby"},
  {"firstName":"Gabriel","lastName":"T.","country":"Luxembourg","continent":"Europe","age":28,"language":"Java"},
  {"firstName":"Artem","lastName":"O.","country":"Ukraine","continent":"Europe","age":29,"language":"Java"},
  {"firstName":"Piotr","lastName":"B.","country":"Poland","continent":"Europe","age":128,"language":"Javascript"},
  {"firstName":"Joao","lastName":"D.","country":"Portugal","continent":"Europe","age":65,"language":"JavaScript"},
  {"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},
  {"firstName":"Luke","lastName":"V.","country":"Malta","continent":"Europe","age":129,"language":"PHP"},
  {"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":80,"language":"Clojure"},
  {"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"},
  {"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"},
  {"firstName":"Mia","lastName":"H.","country":"Germany","continent":"Europe","age":39,"language":"Ruby"},
  {"firstName":"Emma","lastName":"U.","country":"Belgium","continent":"Europe","age":39,"language":"Python"},
  {"firstName":"Fatima","lastName":"H.","country":"Pakistan","continent":"Asia","age":8,"language":"JavaScript"},
  {"firstName":"Precious","lastName":"G.","country":"South Africa","continent":"Africa","age":22,"language":"JavaScript"},
  {"firstName":"Fatemeh","lastName":"Z.","country":"Iran","continent":"Asia","age":29,"language":"Java"},
  {"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"},
  {"firstName":"Aadya","lastName":"Y.","country":"India","continent":"Asia","age":29,"language":"PHP"},
  {"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},
  {"firstName":"Louise","lastName":"F.","country":"France","continent":"Europe","age":22,"language":"Java"},
  {"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},
  {"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},
  {"firstName":"Jakub","lastName":"Z.","country":"Czech Republic","continent":"Europe","age":42,"language":"Java"},
  {"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":21,"language":"C"},
  {"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},
  {"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":70,"language":"Python"},
  {"firstName":"Marija","lastName":"U.","country":"Republic of Macedonia","continent":"Europe","age":42,"language":"JavaScript"},
  {"firstName":"Anna","lastName":"R.","country":"Liechtenstein","continent":"Europe","age":32,"language":"JavaScript"},
  {"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},
  {"firstName":"Sou","lastName":"B.","country":"Japan","continent":"Asia","age":43,"language":"PHP"},
  {"firstName":"Nor","lastName":"E.","country":"Malaysia","continent":"Asia","age":21,"language":"Clojure"},
  {"firstName":"Gabriel","lastName":"X.","country":"Monaco","continent":"Europe","age":79,"language":"PHP"},
  {"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},
  {"firstName":"Oliver","lastName":"Q.","country":"Australia","continent":"Oceania","age":69,"language":"PHP"},
  {"firstName":"Althea","lastName":"I.","country":"Philippines","continent":"Asia","age":81,"language":"Python"},
  {"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"}
]; 

// console.log(isAgeDiverse(list1));
// console.log(isAgeDiverse(list2));
// console.log(isAgeDiverse(list3));
// console.log(isAgeDiverse(list4));
// console.log(isAgeDiverse(list6));
