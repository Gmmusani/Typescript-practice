// Function Overloads

// funtion overload ka istemal types kw maintain rakhne k lie kia jata he.

// This is called signatures
function myfunc(a: string, b: string): string;
function myfunc(a: number, b: number): number;

function myfunc(val1: any, val2: any): any{
    return val1 + val2;
};

console.log(myfunc(2, 2));
console.log(myfunc("ausaf", " GM"));
// console.log(myfunc(true, true)); // error; because function overload hmne string or number die hen.


