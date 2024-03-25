/*37. Large Shirts:  
Modify the make_shirt() function so that shirts are large by default, with a message that reads 
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message.*/


// function make_shirt( label: string , size: string = "Large"){
//     return size + label

// }

// let myFunction = make_shirt (" Big Boss");

// console.log(myFunction);


// // Medium Size
// function make_shirt( label: string , size: string = "Medium"){
//     return size + label

// }

// let myFunction = make_shirt (" Big Boss");

// console.log(myFunction);


// Any Size 

function make_shirt( label: string , size: string = " Any Size"){
    return size + label

}

let myFunction = make_shirt (" I Love Typescript");

console.log(myFunction);