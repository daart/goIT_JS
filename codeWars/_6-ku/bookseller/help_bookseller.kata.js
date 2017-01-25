
/**
 * @description
 *
 * A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters.
 * The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space 
 * and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
 * 
 * 
 * @param  {Array} listOfArt [description]
 * @param  {Array} listOfCat [description]
 * @return {Array}           [description]
 */
const stockList = (listOfArt, listOfCat) => {
	const bookList = {};
	const result = [];
	if(!listOfArt.length || !listOfCat.length) return '';

	listOfArt.forEach(el => bookList[el[0]] ? bookList[el[0]] += +el.slice([el.indexOf(' ') + 1]) : bookList[el[0]] = +el.slice([el.indexOf(' ') + 1]) )
	listOfCat.forEach(el => elel in bookList ? result.push('(' + el + " : " + bookList[el] + ')') : result.push('(' + el + " : " + 0 + ')'));

	return result.join(' - ');
}

books1 = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
cats1 = ["A", "B"];

books2 = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
cats2 = ["A", "B", "C", "W"];

books2 = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
cats2 = ["A", "B", "C", "W"];
// res2 = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"

// res1 = stockList(books1, cats1);
res2 = stockList(books2, cats2);
console.log(res2);