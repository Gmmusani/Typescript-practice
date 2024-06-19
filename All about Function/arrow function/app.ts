// Arrow Function //

// arrow function is also called Anonymous function //

// arrow function syntax

// let sumFunction = () => {}

let arrowFunction:() => string = ():string => {
    let data: string = "Ghulam Mustafa";
    return data;
}

console.log(arrowFunction());

let myFunc = () => {
    console.log("Hello my function")
};

myFunc();

let sumFunc:() => number = () => {
    let total = 10 + 10;
    return total;
};

let result = sumFunc();

console.log("result", result)

// create a one line function

let myFunc2 = () => "Hello Ausaf Musani";

let result2 = myFunc2();

console.log("result", result2);

