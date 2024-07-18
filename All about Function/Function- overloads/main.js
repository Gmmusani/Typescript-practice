// Function Overloads
function myfunc(val1, val2) {
    return val1 + val2;
}
;
console.log(myfunc(2, 2));
console.log(myfunc("ausaf", " GM"));
function getArea(param1, param2) {
    if (param2 && typeof param2 === "number") {
        return param1 * param2;
    }
    else if (param2 && typeof param2 === "boolean") {
        return Math.PI * param1;
    }
    else {
        return param1 * param1;
    }
    ;
}
;
var square = getArea(4);
console.log(square);
var circle = getArea(4, true);
console.log(circle);
var rec = getArea(4, 5);
console.log(rec);
