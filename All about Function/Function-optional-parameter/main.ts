// Optional Parameter

function getName(fName: string, lName?: string): string{
    if (lName){
        return fName + " " + lName;
    } else {
        return fName;
    };
};

console.log(getName("Ghulam", "Mustafa"));
console.log(getName("Ausaf"));

// Anonymous Function explict type with optional parameter:
let getName2: (firstName: string, lastName?: string)=> string = function(firstName: string, lastName?: string): string{
    if (lastName){
        return firstName + " " + lastName;
    } else {
        return firstName;
    };
};

console.log(getName2("Ahmed", "Raza"));
console.log(getName2("Mudassir"));
