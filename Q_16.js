/*16. More Guests:
You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var myFriends = ["Ali", "Tariq", "Adeel", "Hashir"];
console.log(myFriends);
console.log("We have 3 more friends to invite on dinner\n");
// adding 3 more friends
// add at begining
myFriends.unshift("Farhan");
// 'Farhan', 'Ali', 'Tariq', 'Adeel', 'Hashir' ]
console.log(myFriends);
//  Additon in middle
myFriends.splice(2, 0, "Sultan");
console.log(myFriends);
// Addition in last
myFriends.push("Sumair");
console.log(myFriends);
// Print all friends along with message
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends[i], " You are invited to my dinner "));
}
