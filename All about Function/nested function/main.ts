// The function which does not return anything is called Void;

//// Nested Function ////

let newFunc: () => void = () => {
    console.log("arrow function");
};

let anotherFunc = () => {
    newFunc();
};

anotherFunc();

let sum: () => number = () => {
    return 2+2;
}

let total = sum();

console.log(total);
