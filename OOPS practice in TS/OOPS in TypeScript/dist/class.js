// Class, Constructor, Instance //
// Class is like a blueprint for creating objects.
// Constructor ki hmen need is lie he class me 
// k hm instance ki madad se multiple data le sken multiple instance create kr k.
class Person {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    ;
}
;
// Instances of a Class
const person1 = new Person("Ghulam Mustafa", "21", ["Cricket", "Learning"]);
const person2 = new Person("Ausaf", "18", ["Football", "Painting"]);
const Person3 = new Person("Jamshed", "23", ["Travelling", "Swimming"]);
console.log(person1.hobbies);
console.log(person2);
console.log(Person3);
export {};
