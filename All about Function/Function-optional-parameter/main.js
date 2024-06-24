// Optional Parameter
function getName(fName, lName) {
    if (lName) {
        return fName + " " + lName;
    }
    else {
        return fName;
    }
    ;
}
;
console.log(getName("Ghulam", "Mustafa"));
console.log(getName("Ausaf"));
// Anonymous Function explict type with optional parameter:
var getName2 = function (firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
    ;
};
console.log(getName2("Ahmed", "Raza"));
console.log(getName2("Mudassir"));
