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
    // creating Method
    introduce() {
        return `Hi, I am ${this.name} and i am ${this.age} years old, I love ${this.hobbies.join(", ")}`;
    }
}
;
// Inheritance allow krta he class kw reuse krne ki
// bina kuch likhe functionality or properties kw use krne ki. 
class Student extends Person {
    grade;
    constructor(name, age, hobbies, grade) {
        // super keyword child class k constructor or method me use kia jata he.
        // isse parent class ki properties kw initialize kia ja skta he.
        super(name, age, hobbies);
        this.grade = grade;
    }
    ;
    // Method
    introduce() {
        // method overriding base polymorphism
        return `${super.introduce()}, i am in grade ${this.grade}.`;
    }
}
// Instances of a Class
const person1 = new Person("Ghulam Mustafa", "21", ["Cricket", "Learning"]);
const Student1 = new Student("Ahmed", "16", ["Cricket", "Traveling"], "9th");
console.log(Student1);
console.log(Student1.introduce());
console.log(person1.introduce());
;
class Docs {
    print() {
        console.log("Printing a document!");
    }
    ;
}
;
class Photo {
    print() {
        console.log("Printing a Photo!");
    }
    ;
}
;
const doc1 = new Docs();
const photo1 = new Photo();
doc1.print();
photo1.print();
export {};
