class Person {
    name: string;
    age: string;
    hobbies: string[];

    constructor(name: string, age: string, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    };

    // creating Method
    introduce(): string{
        return `Hi, I am ${this.name} and i am ${this.age} years old, I love ${this.hobbies.join(", ")}`
    }
};

// Inheritance allow krta he class kw reuse krne ki
// bina kuch likhe functionality or properties kw use krne ki. 
class Student extends Person {
    grade: string;

    constructor(name: string, age: string, hobbies: string[], grade: string){
        // super keyword child class k constructor or method me use kia jata he.
        // isse parent class ki properties kw initialize kia ja skta he.
        super(name, age, hobbies)
        this.grade = grade;
    };

    // Method
    introduce(): string {
        // method overriding base polymorphism
        return `${super.introduce()}, i am in grade ${this.grade}.`
    }
}

// Instances of a Class
const person1: Person = new Person("Ghulam Mustafa", "21", ["Cricket", "Learning"]);
const Student1: Student = new Student("Ahmed", "16", ["Cricket", "Traveling"], "9th");

console.log(Student1)
console.log(Student1.introduce());

console.log(person1.introduce())


// Interface base polymorphism
interface Printables {
    print(): void;
};

class Docs implements Printables {
    print(): void {
        console.log("Printing a document!");
    };
};

class Photo implements Printables {
    print(): void {
        console.log("Printing a Photo!")
    };
};

const doc1 = new Docs();
const photo1 = new Photo();

doc1.print();
photo1.print();