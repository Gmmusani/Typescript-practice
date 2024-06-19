//  TYPE ANNOTATIONS  //

let myFav = 10; // type inference
let fullName: string = "Ghulam Mustafa"; // type annotations and Strongly typed syntax

// myFav = "gm";    error    // Type 'string' is not assignable to type 'number'.

// func define
function sum(a: number, b: number): number{
    return a+b
}

// call a func
console.log(sum(30,50));

