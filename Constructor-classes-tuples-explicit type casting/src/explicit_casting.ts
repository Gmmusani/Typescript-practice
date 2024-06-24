// Implicit casting

// let fullName = "Jhon";
// fullName = 23 

// explicit casting

// example 2

let fruit: unknown = "Mango";
fruit as string;
(fruit as string).length;
(<string>fruit).length;

console.log(fruit); 