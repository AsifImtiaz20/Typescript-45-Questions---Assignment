/*18. Seeing the World:  
Think of at least five places in the world you’d like to visit. 
• Store the locations in an array. Make sure the array is not in alphabetical order. 
• Print your array in its original order. 
• Print your array in alphabetical order without modifying the actual list. 
• Show that your array is still in its original order by printing it. 
• Print your array in reverse alphabetical order without changing the order of the original list. 
• Show that your array is still in its original order by printing it again. 
• Reverse the order of your list. Print the array to show that its order has changed. 
• Reverse the order of your list again. Print the list to show it’s back to its original order. 
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed. 
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed.*/


let myPlaces: string [] = ["Lahore", "Karachi", "Peshawar", "Quetta", "Gilgit", "Naran"];
// console.log(myPlaces);

// making a copy of array
let copyOfArray =   myPlaces.slice();
let sortedArray =   copyOfArray.sort();
console.log(sortedArray);

// Printing Original Array
// console.log(myPlaces);


// Reversing Alphabat without changing in original Array
let copyOfArray2 = myPlaces.slice();
let reverseOfArray = copyOfArray2.reverse();
console.log(reverseOfArray);

// Printing original Array
console.log(myPlaces);

// Reverse the Order of Original Array
let reverseOfArray2 = myPlaces.reverse();
console.log(reverseOfArray2);

let againReverse = reverseOfArray2.reverse();
console.log(againReverse); //Same as original array

// Sorting Original Array 
let sortOriginalArray = myPlaces.sort();
console.log(sortOriginalArray);

let reverseSortedArray = sortOriginalArray.reverse();
console.log(reverseSortedArray);





