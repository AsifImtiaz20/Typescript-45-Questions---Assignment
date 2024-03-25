/*41. Magicians:  
Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
prints the name of each magician in the array.*/


let magicianNames = ["Ayaz", "Khalid", "Barkat", "Uzmi"];

function show_magicians(){
    for(let magicianName of magicianNames){
        console.log(magicianName);
    }
}

show_magicians();  // calling function magician Names
