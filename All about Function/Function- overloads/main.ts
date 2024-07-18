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

// new Examle

function getArea(side: number): number; // square
function getArea(length: number, width: number): number; // Rectangle
function getArea(radius: number, iscircle: boolean): number; // circle

function getArea(param1: number, param2?: number | boolean){
    if(param2 && typeof param2 === "number"){
        return param1 * param2;
    } else if (param2 && typeof param2 === "boolean"){
        return Math.PI * param1;
    } else {
        return param1 * param1;
    };
};

const square = getArea(4);
console.log(square);

const circle = getArea(4, true);
console.log(circle);

const rec = getArea(4, 5);
console.log(rec);


