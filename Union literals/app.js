// Union Literals
// 1 variable k andar multi data types define kr k use use kr skte hen
// Union Types examples
var unionType;
unionType = "Ali";
unionType = "Akbar";
unionType = "Asghar";
unionType = 20;
unionType = 2000;
unionType = 3000;
// Literal type example
var literalType;
literalType = "Ghulam Mustafa";
// literalType = "Ausaf"; // error
// literalType = 20000; // error 
////
var myName;
myName = null;
console.log(myName);
myName = "GM";
console.log(myName);
myName = "Ausaf";
console.log(myName);
// myName = 123; // error
// myName = undefined; // error
var myAge;
myAge = 20; // narrowing : ye narrow krleta data type kw k ye kis type ka data he. 
console.log(myAge);
console.log(myAge.toString()); // ye method number kw string krdeta he.
myAge = "dont know"; // narrowing
console.log(myAge.toString());
////
var randomNum = Math.random(); // 0-1 
console.log(randomNum);
var newAge = randomNum > 0.6 ? "Ahmed raza" : 70;
if (newAge === "Ahmed raza") {
    console.log(newAge.toUpperCase());
}
else {
    console.log(newAge);
}
if (typeof newAge === "string") {
    console.log(newAge);
} // agr condition string hui tw donon if ki condition run krengi yani output donon ka show hoga.
typeof newAge === "string" ? newAge.toUpperCase : newAge.toFixed();
console.log(newAge);
