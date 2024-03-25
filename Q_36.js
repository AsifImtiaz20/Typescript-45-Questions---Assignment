/*36. T-Shirt:
Write a function called make_shirt() that accepts a size and the text of a message that should
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
message printed on it. Call the function.*/
function make_shirt(size, label) {
    // return size + label;
    // return` My Shirt Size 36" and label is Summer Collection`
}
// let myFunction = make_shirt(36, " Sumemr Collection");
// How to Print Function 
// console.log(myFunction);
var myFunction = function (size, label) {
    return size + label;
};
console.log(myFunction(36, " Smmer Collection"));
