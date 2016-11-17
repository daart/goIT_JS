/**
 * @description 
 *
 * write a function that adds the username property to each object in the input array
 *
 * The value of the username property is composed by concatenating:
 * 
 * firstName in lower-case;
 * first letter of the lastName in lower-case;
 * the birth year which for the purpose of this kata is calculated simply
 * by subtracting age from the current year. Please make sure that your function 
 * delivers the correct birth year irrespective of when it will be executed, 
 * for example it should also work correctly for a meetup organised in 10-years-time. 
 * The example above assumes that the function is run in year 2020.
 * 
 * @param  {Array} list [description]
 * @return {Array}      [description]
 */
const addUserName = (list) => {
	list.forEach(el => el.username = (el.firstName + el.lastName[0]).toLowerCase() + (+new Date().getFullYear() - el.age));
	return list;
};

const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

let res1 = addUserName(list1);
console.log(res1);