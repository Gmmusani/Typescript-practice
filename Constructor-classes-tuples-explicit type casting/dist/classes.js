class Person {
    firstName;
    lastName;
    age;
    getFirstName;
    getAge;
    constructor(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.getFirstName = function () {
            return this.firstName;
        };
        this.getAge = function () {
            return this.age;
        };
    }
}
const person1 = new Person("ausaf", "musani", 18);
const person2 = new Person("Ghulam", "Mustafa", 21);
console.log(person1);
console.log("person 2:", person2.getFirstName());
export {};
