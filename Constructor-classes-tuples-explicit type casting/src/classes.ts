
interface IPerson {
    firstName: string,
    lastName: string,
    age: number
}

interface IPersonClass extends IPerson {
    getFirstName: () => string,
    getAge: () => number
}

class Person implements IPersonClass {
    firstName: string;
    lastName: string;
    age: number;
    getFirstName: () => string;
    getAge: () => number;

    constructor(fName: string, lName: string, age: number){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.getFirstName = function(){
            return this.firstName
        };
        this.getAge = function(){
            return this.age
        }
    }
}  

const person1 = new Person("ausaf", "musani", 18)
const person2 = new Person("Ghulam", "Mustafa", 21)

console.log(person1);
console.log("person 2:", person2.getFirstName())

