// anonymous Function

let myFunc = function(x: number, y: number): number{
    return x + y;
};
console.log(myFunc(5, 5));

// Anonymous function with explict Type;
// jb hmen variable or function k parameter donon ki data type di hui hw tw ye kehlata he explict type.
// type names dont matter.

let myAdd: (a: number, b: number)=> number = function(x: number, y: number): number{
    return x + y;
};
console.log(myAdd(2, 2));

// lambda function (one line function):
let myAdd2 = (a: number, b: number) => a + b;
console.log(myAdd2(2, 10));

let getMyName = () => "Ghulam Mustafa";
console.log(getMyName())



