// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
// and titlecase.


const personName: string = "asifImtiaz";

// lowerCase
console.log(personName.toLowerCase());

// upperCase
console.log(personName.toUpperCase());

// titlecase

let firsletter: string = personName.charAt(0).toUpperCase();
let restletter: string = personName.slice(1).toLowerCase();

let titlecase = firsletter + restletter;
console.log(titlecase);
