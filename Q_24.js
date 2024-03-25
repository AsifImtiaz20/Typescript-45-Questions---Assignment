// /*24. More Conditional Tests:  
// You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following: 
// • Tests for equality and inequality with strings 
// • Tests using the lower case function 
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to 
// • Tests using "and" and "or" operators 
// • Test whether an item is in an array 
// • Test whether an item is not in an array*/
// // Equal and Not Equal
// let myFavClr = "Blue";
// console.log(myFavClr == " Blue" ); // True  ..  Equal to
// console.log(myFavClr!== "blue");  // True .. Not Equal to
// let myNubmer = 10
// console.log(myNubmer == 10);  // true
// console.log(myNubmer !== 10);  // True
// console.log(myNubmer > 9);  //True Greater Than
// console.log(myNubmer < 9);  // False .. Less Than
// console.log(myNubmer <= 9);  // False .. Less Than or Equal to
// console.log(myNubmer >= 9);  // True .. Greater Than or Equal to
// // and && ===== or Operators
// let num1 = 10
// let num2 = 7
// console.log(num1 > 12 && num2 < 9);   // false
// console.log(num1 > 9 || num2 < 6); 
var myArray = [2, 3, "Ali"];
var myString = "Ahmed";
console.log(Array.isArray(myArray)); //true
console.log(Array.isArray(myString)); //False
