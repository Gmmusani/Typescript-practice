// The function which does not return anything is called Void;
//// Nested Function ////
var newFunc = function () {
    console.log("arrow function");
};
var anotherFunc = function () {
    newFunc();
};
anotherFunc();
var sum = function () {
    return 2 + 2;
};
var total = sum();
console.log(total);
