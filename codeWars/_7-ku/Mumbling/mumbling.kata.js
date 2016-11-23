/**
 * @description
 *
 * accum("abcd");    // "A-Bb-Ccc-Dddd" 
 * accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" 
 * accum("cwAt");    // "C-Ww-Aaa-Tttt"
 * 
 * @param  {String} s [description]
 * @return {String}   [description]
 */
const accum = (s) => {
	return s.toLowerCase().split('').map((el, ind) => el = el.toUpperCase() + el.repeat(ind)).join('-');
};

let str1 = 'abcd';
let str2 = 'RqaEzty';
let str3 = 'ZpglnRxqenU';
let str4 = 'NyffsGeyylB';
let str5 = 'MjtkuBovqrU';
let str6 = 'EvidjUnokmM';
let str7 = 'HbideVbxncC';

let res1 = accum(str1);
let res2 = accum(str2);
let res3 = accum(str3);
let res4 = accum(str4);
let res5 = accum(str5);
let res6 = accum(str6);
let res7 = accum(str7);

// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6);
// console.log(res7);

module.exports = {
	accum
};