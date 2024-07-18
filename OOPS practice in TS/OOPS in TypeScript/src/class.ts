// Class, Constructor, Instance //

// Class is like a blueprint for creating objects.
// Constructor ki hmen need is lie he class me 
// k hm instance ki madad se multiple data le sken multiple instance create kr k.

class Person {
    name: string;
    age: string;
    hobbies: string[];

    constructor(name: string, age: string, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    };
};

// Instances of a Class
const person1: Person = new Person("Ghulam Mustafa", "21", ["Cricket", "Learning"]);
const person2: Person = new Person("Ausaf", "18", ["Football", "Painting"]);
const Person3: Person = new Person("Jamshed", "23", ["Travelling", "Swimming"]);

console.log(person1.hobbies)
console.log(person2)
console.log(Person3)