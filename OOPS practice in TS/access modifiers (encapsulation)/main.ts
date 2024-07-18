// Access Modifiers //

//               / Parent Class / Child Class / Outside class /
// public        / ok           / ok          / ok            /     
// protected     / ok           / ok          / X             /
// private       / ok           / X           / X             /

// static ki madad se hm bina instance k b value access kr skte hen.
// us property ya method ki jis ka access modifier static hw.

// static 
class Circle {
    static color: string = "Black";
    static getColor(): string{
        return this.color;
    }; 
};

console.log(Circle.color);
console.log(Circle.getColor())

// public, protected, private //

// Parent Class
class Person {
    public name: string;
    protected age: string;
    private hobbies: string[];

    constructor(name: string, age: string, hobbies: string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    };

    // creating Method
   protected introduce(): string{
        return `Hi, I am ${this.name} and i am ${this.age} years old, I love ${this.hobbies.join(",")}.`
    }
};

// // Child Class //
// class Student extends Person {
//     grade: string;

//     constructor(name: string, age: string, hobbies: string[], grade: string){
//         super(name, age, hobbies)
//         this.grade = grade;
//     };

//     // Method
//     introduce2(): string[] {
//         // return `${super.introduce()}, i am in grade ${this.grade}.`
//         return this.hobbies; // Error : because this property is private.
//     }
// }

// // Instances of a Class
// const person1: Person = new Person("Ghulam Mustafa", "21", ["Cricket", "Learning"]);
// const Student1: Student = new Student("Ahmed", "16", ["Cricket", "Traveling"], "9th");

// console.log(Student1)
// console.log(Student1.introduce()); // Error bcz this method is protected.

// console.log(person1.hobbies) // Error : because this property is private.