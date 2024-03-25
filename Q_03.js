// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
// and titlecase.
var personName = "asifImtiaz";
// lowerCase
console.log(personName.toLowerCase());
// upperCase
console.log(personName.toUpperCase());
// titlecase
var firsletter = personName.charAt(0).toUpperCase();
var restletter = personName.slice(1).toLowerCase();
var titlecase = firsletter + restletter;
console.log(titlecase);
