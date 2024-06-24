// Callback Function
// Function k argument k andar function dena call back function kehlata he.
function hello(callback) {
    callback("GM");
}
;
// arrowFunc call ho rha he hello function me 
var arrowFunc = function (name) {
    console.log("hellow ".concat(name));
};
hello(arrowFunc);
//// new example
function getName(par1, par2) {
    par1(par2);
}
;
function myCallBack(name) {
    console.log("My name is ".concat(name));
}
;
getName(myCallBack, "Ausaf");
